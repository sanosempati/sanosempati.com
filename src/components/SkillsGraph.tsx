"use client";

import {
  forceCenter,
  forceCollide,
  forceLink,
  forceManyBody,
  forceRadial,
  forceSimulation,
  type Simulation,
  type SimulationLinkDatum,
  type SimulationNodeDatum,
} from "d3-force";
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
  r: number;
  angle: number;
};

type ForceLink = SimulationLinkDatum<ForceNode> & {
  kind: "hub" | "leaf";
};

const VIEW_W = 1100;
const VIEW_H = 700;
const CX = VIEW_W / 2;
const CY = VIEW_H / 2;
const GROUP_RADIUS = 168;
const SKILL_RADIUS = 108;

const GROUP_STYLE: Record<
  string,
  { fill: string; text: string; angle: number }
> = {
  Product: { fill: "#12b3a4", text: "#ffffff", angle: -90 },
  Design: { fill: "#ffffff", text: "#17140d", angle: 160 },
  Engineering: { fill: "#fdc5c4", text: "#17140d", angle: 20 },
  GenAI: { fill: "#8ac8ea", text: "#17140d", angle: 90 },
};

/** Cross-cluster hints — shown only on hover, not as permanent edges */
const RELATED_SKILLS: [string, string][] = [
  ["Prototyping", "React"],
  ["UI/UX", "Product management"],
  ["Design systems", "HTML / CSS"],
  ["Information architecture", "Roadmapping"],
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

function nodeRadius(kind: NodeKind, label: string) {
  if (kind === "center") return 36;
  if (kind === "group") return 34;
  return Math.max(24, Math.min(72, label.length * 3.6));
}

function polar(cx: number, cy: number, radius: number, angleDeg: number) {
  return {
    x: cx + Math.cos(toRad(angleDeg)) * radius,
    y: cy + Math.sin(toRad(angleDeg)) * radius,
  };
}

function buildGraph() {
  const nodes: ForceNode[] = [
    {
      id: "center",
      label: "Sano",
      kind: "center",
      x: CX,
      y: CY,
      fx: CX,
      fy: CY,
      fill: "#ff5b57",
      text: "#ffffff",
      r: nodeRadius("center", "Sano"),
      angle: 0,
    },
  ];
  const links: ForceLink[] = [];

  skills.forEach((cluster) => {
    const style = GROUP_STYLE[cluster.group] ?? {
      fill: "#ffffff",
      text: "#17140d",
      angle: 0,
    };
    const groupPos = polar(CX, CY, GROUP_RADIUS, style.angle);
    const gid = groupId(cluster.group);

    nodes.push({
      id: gid,
      label: cluster.group,
      kind: "group",
      group: cluster.group,
      x: groupPos.x,
      y: groupPos.y,
      fx: groupPos.x,
      fy: groupPos.y,
      fill: style.fill,
      text: style.text,
      r: nodeRadius("group", cluster.group),
      angle: style.angle,
    });
    links.push({ source: "center", target: gid, kind: "hub" });

    const count = cluster.items.length;
    const arc = Math.min(96, 18 * count + 12);
    const outward = style.angle;

    cluster.items.forEach((item, index) => {
      const angle =
        outward - arc / 2 + ((index + 0.5) / count) * arc;
      const pos = polar(groupPos.x, groupPos.y, SKILL_RADIUS, angle);
      const id = skillId(item);

      nodes.push({
        id,
        label: item,
        kind: "skill",
        group: cluster.group,
        x: pos.x,
        y: pos.y,
        fill: style.fill,
        text: style.text,
        r: nodeRadius("skill", item),
        angle,
      });
      links.push({ source: gid, target: id, kind: "leaf" });
    });
  });

  return { nodes, links };
}

function endId(end: string | number | ForceNode) {
  if (typeof end === "object") return end.id;
  return String(end);
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

function edgeEndpoints(from: ForceNode, to: ForceNode) {
  const sx = from.x ?? CX;
  const sy = from.y ?? CY;
  const tx = to.x ?? CX;
  const ty = to.y ?? CY;
  const dx = tx - sx;
  const dy = ty - sy;
  const dist = Math.hypot(dx, dy) || 1;
  const pad = 6;
  return {
    x1: sx + (dx / dist) * (from.r + pad),
    y1: sy + (dy / dist) * (from.r + pad),
    x2: tx - (dx / dist) * (to.r + pad),
    y2: ty - (dy / dist) * (to.r + pad),
  };
}

export function SkillsGraph() {
  const reduceMotion = useReducedMotion();
  const seed = useMemo(() => buildGraph(), []);
  const frameRef = useRef<HTMLDivElement>(null);
  const simRef = useRef<Simulation<ForceNode, ForceLink> | null>(null);
  const nodesRef = useRef<ForceNode[]>(seed.nodes);
  const linksRef = useRef<ForceLink[]>(seed.links);
  const dragRef = useRef<{
    id: string;
    moved: boolean;
    pointerId: number;
  } | null>(null);
  const [, setTick] = useState(0);
  const [hovered, setHovered] = useState<string | null>(null);
  const [pinned, setPinned] = useState<string | null>(null);
  const active = hovered ?? pinned;
  const focus = active ? neighborsOf(active, linksRef.current) : null;

  useEffect(() => {
    const { nodes, links } = buildGraph();
    nodesRef.current = nodes;
    linksRef.current = links;

    const simulation = forceSimulation(nodes)
      .force(
        "link",
        forceLink<ForceNode, ForceLink>(links)
          .id((node) => node.id)
          .distance((link) => (link.kind === "hub" ? GROUP_RADIUS : SKILL_RADIUS))
          .strength((link) => (link.kind === "hub" ? 1 : 0.72)),
      )
      .force("charge", forceManyBody<ForceNode>().strength((node) => {
        if (node.kind === "center") return -420;
        if (node.kind === "group") return -320;
        return -140;
      }))
      .force(
        "collide",
        forceCollide<ForceNode>()
          .radius((node) => node.r + 18)
          .strength(1)
          .iterations(3),
      )
      .force(
        "radial",
        forceRadial<ForceNode>(
          (node) => {
            if (node.kind === "group") return GROUP_RADIUS;
            if (node.kind === "skill") return GROUP_RADIUS + SKILL_RADIUS;
            return 0;
          },
          CX,
          CY,
        )
          .strength((node) => {
            if (node.kind === "group") return 0.95;
            if (node.kind === "skill") return 0.55;
            return 0;
          }),
      )
      .force("center", forceCenter(CX, CY).strength(0.02))
      .alphaDecay(0.04)
      .velocityDecay(0.42)
      .on("tick", () => {
        nodes.forEach((node) => {
          if (node.kind === "center") {
            node.fx = CX;
            node.fy = CY;
            node.x = CX;
            node.y = CY;
            return;
          }
          if (node.kind === "group") {
            const anchor = polar(CX, CY, GROUP_RADIUS, node.angle);
            node.fx = anchor.x;
            node.fy = anchor.y;
            node.x = anchor.x;
            node.y = anchor.y;
            return;
          }
          const pad = node.r + 10;
          node.x = Math.max(pad, Math.min(VIEW_W - pad, node.x ?? CX));
          node.y = Math.max(pad, Math.min(VIEW_H - pad, node.y ?? CY));
        });
        setTick((value) => value + 1);
      });

    simRef.current = simulation;

    if (reduceMotion) {
      simulation.stop();
      for (let i = 0; i < 120; i += 1) simulation.tick();
      setTick((value) => value + 1);
    } else {
      simulation.alpha(0.9).restart();
    }

    return () => {
      simulation.stop();
      simRef.current = null;
    };
  }, [reduceMotion]);

  const toGraphPoint = (clientX: number, clientY: number) => {
    const frame = frameRef.current;
    if (!frame) return { x: CX, y: CY };
    const rect = frame.getBoundingClientRect();
    return {
      x: ((clientX - rect.left) / rect.width) * VIEW_W,
      y: ((clientY - rect.top) / rect.height) * VIEW_H,
    };
  };

  const onPointerDown = (event: React.PointerEvent, node: ForceNode) => {
    if (node.kind === "center" || node.kind === "group") return;
    event.stopPropagation();
    event.currentTarget.setPointerCapture(event.pointerId);
    dragRef.current = { id: node.id, moved: false, pointerId: event.pointerId };
    const point = toGraphPoint(event.clientX, event.clientY);
    node.fx = point.x;
    node.fy = point.y;
    simRef.current?.alphaTarget(0.18).restart();
  };

  const onPointerMove = (event: React.PointerEvent, node: ForceNode) => {
    if (!dragRef.current || dragRef.current.pointerId !== event.pointerId) return;
    if (Math.abs(event.movementX) + Math.abs(event.movementY) > 2) {
      dragRef.current.moved = true;
    }
    const point = toGraphPoint(event.clientX, event.clientY);
    node.fx = point.x;
    node.fy = point.y;
  };

  const onPointerUp = (event: React.PointerEvent, node: ForceNode) => {
    if (!dragRef.current || dragRef.current.pointerId !== event.pointerId) return;
    const wasDrag = dragRef.current.moved;
    dragRef.current = null;
    node.fx = null;
    node.fy = null;
    simRef.current?.alphaTarget(0);
    if (!wasDrag) {
      setPinned((current) => (current === node.id ? null : node.id));
    }
  };

  const nodes = nodesRef.current;
  const links = linksRef.current;

  const relatedPairs = focus
    ? RELATED_SKILLS.map(([a, b]) => ({
        a: nodes.find((n) => n.id === skillId(a)),
        b: nodes.find((n) => n.id === skillId(b)),
      })).filter(
        (pair): pair is { a: ForceNode; b: ForceNode } =>
          Boolean(pair.a && pair.b) &&
          focus.has(pair.a!.id) &&
          focus.has(pair.b!.id),
      )
    : [];

  return (
    <div
      ref={frameRef}
      data-lenis-prevent
      className="relative min-h-[30rem] touch-none overflow-hidden rounded-[14px] border-[3px] border-[#17140d] bg-[#fcf9f7] shadow-[8px_8px_0_#17140d] md:min-h-[38rem]"
      onClick={() => setPinned(null)}
    >
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        {links.map((link) => {
          const source = nodes.find((node) => node.id === endId(link.source));
          const target = nodes.find((node) => node.id === endId(link.target));
          if (!source || !target) return null;
          const lit =
            !focus || (focus.has(source.id) && focus.has(target.id));
          const { x1, y1, x2, y2 } = edgeEndpoints(source, target);
          return (
            <line
              key={`${source.id}-${target.id}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#17140d"
              strokeWidth={lit ? 2.5 : 1.5}
              strokeOpacity={lit ? 0.45 : 0.1}
              strokeLinecap="round"
            />
          );
        })}

        {relatedPairs.map(({ a, b }) => {
          const { x1, y1, x2, y2 } = edgeEndpoints(a, b);
          return (
            <line
              key={`related-${a.id}-${b.id}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#17140d"
              strokeWidth={2}
              strokeOpacity={0.28}
              strokeDasharray="6 8"
              strokeLinecap="round"
            />
          );
        })}
      </svg>

      {nodes.map((node) => {
        const lit = !focus || focus.has(node.id);
        const isActive = active === node.id;
        const draggable = node.kind === "skill";
        return (
          <div
            key={node.id}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${(((node.x ?? CX) / VIEW_W) * 100).toFixed(3)}%`,
              top: `${(((node.y ?? CY) / VIEW_H) * 100).toFixed(3)}%`,
              zIndex: isActive ? 4 : node.kind === "center" ? 3 : 2,
              opacity: lit ? 1 : 0.26,
            }}
          >
            <button
              type="button"
              className={`whitespace-nowrap rounded-[14px] border-[3px] border-[#17140d] px-3 py-1.5 text-left text-[0.7rem] font-medium tracking-tight shadow-[5px_5px_0_#17140d] md:px-3.5 md:py-2 md:text-[0.8125rem] ${
                draggable
                  ? "cursor-grab active:cursor-grabbing"
                  : "cursor-default"
              }`}
              style={{
                backgroundColor: node.fill,
                color: node.text,
                transform: isActive ? "scale(1.04)" : "scale(1)",
              }}
              onMouseEnter={() => setHovered(node.id)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(node.id)}
              onBlur={() => setHovered(null)}
              onPointerDown={
                draggable ? (event) => onPointerDown(event, node) : undefined
              }
              onPointerMove={
                draggable ? (event) => onPointerMove(event, node) : undefined
              }
              onPointerUp={
                draggable ? (event) => onPointerUp(event, node) : undefined
              }
              onPointerCancel={
                draggable ? (event) => onPointerUp(event, node) : undefined
              }
              onClick={(event) => {
                event.stopPropagation();
                if (!draggable) return;
                setPinned((current) => (current === node.id ? null : node.id));
              }}
            >
              {node.label}
            </button>
          </div>
        );
      })}
    </div>
  );
}
