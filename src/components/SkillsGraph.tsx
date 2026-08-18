"use client";

import { drag } from "d3-drag";
import {
  forceCenter,
  forceCollide,
  forceLink,
  forceManyBody,
  forceSimulation,
  forceX,
  forceY,
  type Simulation,
  type SimulationLinkDatum,
  type SimulationNodeDatum,
} from "d3-force";
import { select } from "d3-selection";
import { useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { skills } from "@/lib/content";

type NodeKind = "center" | "group" | "skill";

type ForceNode = SimulationNodeDatum & {
  id: string;
  label: string;
  kind: NodeKind;
  group?: string;
  fill: string;
  text: string;
  halfW: number;
  halfH: number;
  /** Group bearing from center, or skill orbit angle around its group */
  angle: number;
};

type ForceLink = SimulationLinkDatum<ForceNode> & {
  kind: "hub" | "leaf";
};

const VIEW_W = 1100;
const VIEW_H = 720;
const CX = VIEW_W / 2;
const CY = VIEW_H / 2;
const GROUP_RADIUS = 158;
const SKILL_RADIUS = 92;

const GROUP_STYLE: Record<
  string,
  { fill: string; text: string; angle: number }
> = {
  Product: { fill: "#12b3a4", text: "#ffffff", angle: -90 },
  Build: { fill: "#fdc5c4", text: "#17140d", angle: 162 },
  GenAI: { fill: "#8ac8ea", text: "#17140d", angle: 18 },
  "Graph DB": { fill: "#b8e6c8", text: "#17140d", angle: 90 },
  Domain: { fill: "#f5d0a9", text: "#17140d", angle: -162 },
};

const RELATED_SKILLS: [string, string][] = [
  ["RAG", "GraphRAG"],
  ["GraphRAG", "Neo4j"],
  ["LLM", "RAG"],
  ["AI agents", "Agentic workflows"],
  ["AI agents", "n8n"],
  ["Product discovery", "RAG"],
  ["HR tech", "Product strategy"],
  ["HR Tech", "Product discovery"],
  ["Assessment Framework", "HR Tech"],
  ["B2B Field", "Product strategy"],
  ["Supabase", "Vercel"],
  ["Prompting", "LLM"],
  ["Cypher", "Neo4j"],
];

function toRad(deg: number) {
  return (deg * Math.PI) / 180;
}

function skillId(label: string) {
  return `skill:${label}`;
}

function groupId(label: string) {
  return `group:${label}`;
}

function nodeSize(label: string, kind: NodeKind) {
  const charW = kind === "center" ? 8.5 : 7.4;
  const padX = kind === "center" ? 36 : 28;
  const height = kind === "center" ? 44 : kind === "group" ? 40 : 36;
  const width = Math.max(
    kind === "center" ? 80 : kind === "group" ? 72 : 64,
    label.length * charW + padX,
  );
  return { halfW: width / 2, halfH: height / 2 };
}

function polar(cx: number, cy: number, radius: number, angleDeg: number) {
  return {
    x: cx + Math.cos(toRad(angleDeg)) * radius,
    y: cy + Math.sin(toRad(angleDeg)) * radius,
  };
}

function groupAnchor(angle: number) {
  return polar(CX, CY, GROUP_RADIUS, angle);
}

function skillAnchor(group: ForceNode, orbitAngle: number) {
  const gx = group.x ?? CX;
  const gy = group.y ?? CY;
  return polar(gx, gy, SKILL_RADIUS, orbitAngle);
}

function buildGraph() {
  const nodes: ForceNode[] = [];
  const links: ForceLink[] = [];
  const centerSize = nodeSize("Sano", "center");

  nodes.push({
    id: "center",
    label: "Sano",
    kind: "center",
    x: CX,
    y: CY,
    fill: "#ff5b57",
    text: "#ffffff",
    halfW: centerSize.halfW,
    halfH: centerSize.halfH,
    angle: 0,
  });

  skills.forEach((cluster) => {
    const graphKey = cluster.graphLabel;
    const style = GROUP_STYLE[graphKey] ?? {
      fill: "#ffffff",
      text: "#17140d",
      angle: 0,
    };
    const groupPos = groupAnchor(style.angle);
    const gid = groupId(graphKey);
    const groupSize = nodeSize(graphKey, "group");

    nodes.push({
      id: gid,
      label: graphKey,
      kind: "group",
      group: graphKey,
      x: groupPos.x,
      y: groupPos.y,
      fill: style.fill,
      text: style.text,
      halfW: groupSize.halfW,
      halfH: groupSize.halfH,
      angle: style.angle,
    });
    links.push({ source: "center", target: gid, kind: "hub" });

    const count = cluster.items.length;
    const arc = Math.min(88, 16 * count + 10);

    cluster.items.forEach((item, index) => {
      const orbitAngle =
        style.angle - arc / 2 + ((index + 0.5) / count) * arc;
      const pos = polar(groupPos.x, groupPos.y, SKILL_RADIUS, orbitAngle);
      const size = nodeSize(item, "skill");

      nodes.push({
        id: skillId(item),
        label: item,
        kind: "skill",
        group: graphKey,
        x: pos.x,
        y: pos.y,
        fill: style.fill,
        text: style.text,
        halfW: size.halfW,
        halfH: size.halfH,
        angle: orbitAngle,
      });
      links.push({ source: gid, target: skillId(item), kind: "leaf" });
    });
  });

  return { nodes, links };
}

function endId(end: string | number | ForceNode) {
  if (typeof end === "object") return end.id;
  return String(end);
}

function edgePoints(from: ForceNode, to: ForceNode) {
  const sx = from.x ?? CX;
  const sy = from.y ?? CY;
  const tx = to.x ?? CX;
  const ty = to.y ?? CY;
  const dx = tx - sx;
  const dy = ty - sy;
  const dist = Math.hypot(dx, dy) || 1;
  const ux = dx / dist;
  const uy = dy / dist;

  const startT = Math.min(
    from.halfW / Math.abs(ux || Infinity),
    from.halfH / Math.abs(uy || Infinity),
  );
  const endT = Math.min(
    to.halfW / Math.abs(ux || Infinity),
    to.halfH / Math.abs(uy || Infinity),
  );

  return {
    x1: sx + ux * startT,
    y1: sy + uy * startT,
    x2: tx - ux * endT,
    y2: ty - uy * endT,
  };
}

function neighborsOf(id: string, links: ForceLink[]) {
  const related = new Set<string>([id]);
  links.forEach((link) => {
    const source = endId(link.source);
    const target = endId(link.target);
    if (source === id) related.add(target);
    if (target === id) related.add(source);
  });
  RELATED_SKILLS.forEach(([a, b]) => {
    const aId = skillId(a);
    const bId = skillId(b);
    if (id === aId) related.add(bId);
    if (id === bId) related.add(aId);
  });
  return related;
}

function GraphNodeShape({
  node,
  lit,
  active,
  onHover,
  onLeave,
  onClick,
  draggable,
  svgRef,
  simRef,
  nodesRef,
}: {
  node: ForceNode;
  lit: boolean;
  active: boolean;
  onHover: () => void;
  onLeave: () => void;
  onClick?: () => void;
  draggable?: boolean;
  svgRef: React.RefObject<SVGSVGElement | null>;
  simRef: React.RefObject<Simulation<ForceNode, ForceLink> | null>;
  nodesRef: React.RefObject<ForceNode[]>;
}) {
  const gRef = useRef<SVGGElement>(null);
  const width = node.halfW * 2;
  const height = node.halfH * 2;
  const x = node.x ?? CX;
  const y = node.y ?? CY;

  useEffect(() => {
    if (!draggable) return;
    const g = gRef.current;
    const svg = svgRef.current;
    if (!g || !svg) return;

    const behavior = drag<SVGGElement, unknown>()
      .on("start", (event) => {
        select(g).raise();
        event.sourceEvent.stopPropagation();
        simRef.current?.alphaTarget(0.28).restart();
      })
      .on("drag", (event) => {
        const n = nodesRef.current.find((item) => item.id === node.id);
        const svgNode = svgRef.current;
        if (!n || !svgNode) return;
        const pt = svgNode.createSVGPoint();
        pt.x = event.sourceEvent.clientX;
        pt.y = event.sourceEvent.clientY;
        const cursor = pt.matrixTransform(svgNode.getScreenCTM()?.inverse());
        n.fx = cursor.x;
        n.fy = cursor.y;
      })
      .on("end", () => {
        const n = nodesRef.current.find((item) => item.id === node.id);
        if (n) {
          n.fx = null;
          n.fy = null;
        }
        simRef.current?.alphaTarget(0);
      });

    select(g).call(behavior);
    return () => {
      select(g).on(".drag", null);
    };
  }, [draggable, node.id, nodesRef, simRef, svgRef]);

  return (
    <g
      ref={gRef}
      transform={`translate(${x - node.halfW}, ${y - node.halfH})`}
      opacity={lit ? 1 : 0.26}
      style={{ cursor: draggable ? "grab" : onClick ? "pointer" : "default" }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={(event) => {
        event.stopPropagation();
        onClick?.();
      }}
    >
      <rect x={5} y={5} width={width} height={height} rx={14} fill="#17140d" />
      <rect
        x={0}
        y={0}
        width={width}
        height={height}
        rx={14}
        fill={node.fill}
        stroke="#17140d"
        strokeWidth={3}
        transform={active ? "translate(1,1)" : undefined}
      />
      <text
        x={width / 2}
        y={height / 2 + 1}
        textAnchor="middle"
        dominantBaseline="middle"
        fill={node.text}
        fontSize={node.kind === "center" ? 14 : 12}
        fontWeight={500}
        style={{ pointerEvents: "none", userSelect: "none" }}
      >
        {node.label}
      </text>
    </g>
  );
}

export function SkillsGraph() {
  const reduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const seed = useMemo(() => buildGraph(), []);
  const svgRef = useRef<SVGSVGElement>(null);
  const simRef = useRef<Simulation<ForceNode, ForceLink> | null>(null);
  const nodesRef = useRef<ForceNode[]>(seed.nodes);
  const linksRef = useRef<ForceLink[]>(seed.links);
  const [, setTick] = useState(0);
  const [hovered, setHovered] = useState<string | null>(null);
  const [pinned, setPinned] = useState<string | null>(null);
  const active = hovered ?? pinned;
  const focus = active ? neighborsOf(active, linksRef.current) : null;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const { nodes, links } = buildGraph();
    nodesRef.current = nodes;
    linksRef.current = links;

    const getGroup = (name?: string) =>
      nodes.find((n) => n.id === groupId(name ?? ""));

    const simulation = forceSimulation(nodes)
      .force(
        "link",
        forceLink<ForceNode, ForceLink>(links)
          .id((d) => d.id)
          .distance((link) =>
            link.kind === "hub" ? GROUP_RADIUS : SKILL_RADIUS * 0.92,
          )
          .strength((link) => (link.kind === "hub" ? 0.95 : 0.72)),
      )
      .force(
        "charge",
        forceManyBody<ForceNode>().strength((node) => {
          if (node.kind === "center") return -520;
          if (node.kind === "group") return -260;
          return -110;
        }),
      )
      .force(
        "collide",
        forceCollide<ForceNode>()
          .radius((node) => Math.max(node.halfW, node.halfH) + 12)
          .strength(0.92)
          .iterations(2),
      )
      .force(
        "x",
        forceX<ForceNode>((node) => {
          if (node.kind === "center") return CX;
          if (node.kind === "group") return groupAnchor(node.angle).x;
          const group = getGroup(node.group);
          return group ? skillAnchor(group, node.angle).x : node.x ?? CX;
        }).strength((node) => {
          if (node.kind === "center") return 0.08;
          if (node.kind === "group") return 0.22;
          return 0.14;
        }),
      )
      .force(
        "y",
        forceY<ForceNode>((node) => {
          if (node.kind === "center") return CY;
          if (node.kind === "group") return groupAnchor(node.angle).y;
          const group = getGroup(node.group);
          return group ? skillAnchor(group, node.angle).y : node.y ?? CY;
        }).strength((node) => {
          if (node.kind === "center") return 0.08;
          if (node.kind === "group") return 0.22;
          return 0.14;
        }),
      )
      .force("center", forceCenter(CX, CY).strength(0.025))
      .alphaDecay(0.022)
      .velocityDecay(0.34)
      .on("tick", () => {
        const center = nodes.find((n) => n.kind === "center");
        if (center) {
          center.fx = CX;
          center.fy = CY;
        }
        nodes.forEach((node) => {
          const pad = Math.max(node.halfW, node.halfH) + 8;
          node.x = Math.max(pad, Math.min(VIEW_W - pad, node.x ?? CX));
          node.y = Math.max(pad, Math.min(VIEW_H - pad, node.y ?? CY));
        });
        setTick((v) => v + 1);
      });

    simRef.current = simulation;

    if (reduceMotion) {
      simulation.stop();
      for (let i = 0; i < 160; i += 1) simulation.tick();
      setTick((v) => v + 1);
    } else {
      simulation.alpha(1).restart();
    }

    return () => {
      simulation.stop();
      simRef.current = null;
    };
  }, [mounted, reduceMotion]);

  if (!mounted) {
    return (
      <div
        className="min-h-[30rem] overflow-hidden rounded-[14px] border-[3px] border-[#17140d] bg-[#fcf9f7] shadow-[8px_8px_0_#17140d] md:min-h-[38rem]"
        aria-hidden
      />
    );
  }

  const nodes = nodesRef.current;
  const links = linksRef.current;
  const nodeMap = new Map(nodes.map((node) => [node.id, node]));

  const relatedPairs = focus
    ? RELATED_SKILLS.map(([a, b]) => ({
        a: nodeMap.get(skillId(a)),
        b: nodeMap.get(skillId(b)),
      })).filter(
        (pair): pair is { a: ForceNode; b: ForceNode } =>
          Boolean(pair.a && pair.b) &&
          focus.has(pair.a!.id) &&
          focus.has(pair.b!.id),
      )
    : [];

  return (
    <div
      data-lenis-prevent
      className="overflow-hidden rounded-[14px] border-[3px] border-[#17140d] bg-[#fcf9f7] shadow-[8px_8px_0_#17140d]"
      onClick={() => setPinned(null)}
    >
      <svg
        ref={svgRef}
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className="h-auto w-full min-h-[30rem] md:min-h-[38rem]"
        role="img"
        aria-label="Sano Sempati skills map"
      >
        {links.map((link) => {
          const source = nodeMap.get(endId(link.source));
          const target = nodeMap.get(endId(link.target));
          if (!source || !target) return null;
          const lit = !focus || (focus.has(source.id) && focus.has(target.id));
          const { x1, y1, x2, y2 } = edgePoints(source, target);
          return (
            <line
              key={`${source.id}-${target.id}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#17140d"
              strokeWidth={lit ? 2.5 : 1.5}
              strokeOpacity={lit ? 0.5 : 0.12}
              strokeLinecap="round"
            />
          );
        })}

        {relatedPairs.map(({ a, b }) => {
          const { x1, y1, x2, y2 } = edgePoints(a, b);
          return (
            <line
              key={`related-${a.id}-${b.id}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#17140d"
              strokeWidth={2}
              strokeOpacity={0.3}
              strokeDasharray="6 8"
              strokeLinecap="round"
            />
          );
        })}

        {nodes.map((node) => {
          const lit = !focus || focus.has(node.id);
          const isActive = active === node.id;
          return (
            <GraphNodeShape
              key={node.id}
              node={node}
              lit={lit}
              active={isActive}
              onHover={() => setHovered(node.id)}
              onLeave={() => setHovered(null)}
              onClick={() =>
                setPinned((current) => (current === node.id ? null : node.id))
              }
              draggable={node.kind === "skill" && !reduceMotion}
              svgRef={svgRef}
              simRef={simRef}
              nodesRef={nodesRef}
            />
          );
        })}
      </svg>
    </div>
  );
}
