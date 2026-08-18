import {
  formatMediumDate,
  getMediumPosts,
  getMediumProfileUrl,
  type MediumPost,
} from "@/lib/medium";
import { writings } from "@/lib/content";
import { BilingualText } from "./BilingualText";
import { SectionHeading } from "./SectionHeading";
import { SectionShell } from "./SectionShell";

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 256 256"
      fill="currentColor"
      aria-hidden
    >
      <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
    </svg>
  );
}

function WritingRow({ post, index }: { post: MediumPost; index: number }) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <a
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group grid grid-cols-[auto_1fr_auto] items-start gap-4 border-t border-dh-dark/15 py-7 transition-colors first:border-t-0 md:gap-8 md:py-9"
    >
      <span className="pt-1 text-sm font-medium text-dh-medium md:text-base">
        {number}
      </span>
      <div className="min-w-0">
        <p className="text-xs font-medium uppercase tracking-[0.08em] text-dh-medium">
          {formatMediumDate(post.pubDate)}
        </p>
        <h3 className="font-display mt-2 text-[clamp(1.15rem,1.6vw,1.5rem)] font-medium leading-[1.25] tracking-tight text-dh-dark transition-colors group-hover:text-dh-dark/70">
          {post.title}
        </h3>
        {post.excerpt ? (
          <p className="mt-2 max-w-[62ch] text-[0.9375rem] font-medium leading-relaxed text-dh-medium md:text-base">
            {post.excerpt}
          </p>
        ) : null}
      </div>
      <ArrowIcon className="mt-1 shrink-0 text-dh-dark transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

export async function Writings() {
  const posts = await getMediumPosts(6);
  const profileUrl = getMediumProfileUrl();

  return (
    <SectionShell
      id="tulisan"
      tone="light"
      innerClassName="section-pad py-16 md:py-[clamp(5rem,8vw,8rem)]"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading label={writings.label} heading={writings.heading} />
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 self-start text-sm font-medium text-dh-dark underline decoration-dh-dark/25 underline-offset-4 transition-colors hover:decoration-dh-dark md:self-auto"
        >
          <BilingualText value={writings.viewAll} as="span" />
          <ArrowIcon className="h-4 w-4" />
        </a>
      </div>

      {posts.length === 0 ? (
        <BilingualText
          value={writings.empty}
          as="p"
          className="mt-12 text-base font-medium text-dh-medium"
        />
      ) : (
        <div className="mt-10 md:mt-14">
          {posts.map((post, index) => (
            <WritingRow key={post.link} post={post} index={index} />
          ))}
        </div>
      )}
    </SectionShell>
  );
}
