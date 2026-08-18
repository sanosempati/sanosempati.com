import Parser from "rss-parser";

export type MediumPost = {
  title: string;
  link: string;
  pubDate: string;
  excerpt: string;
  categories: string[];
  thumbnail?: string;
};

const USERNAME = "sanosempati";
const FEED_URL = `https://medium.com/feed/@${USERNAME}`;
const PROFILE_URL = `https://medium.com/@${USERNAME}`;

type FeedItem = {
  title?: string;
  link?: string;
  pubDate?: string;
  contentSnippet?: string;
  content?: string;
  categories?: string[];
  "content:encoded"?: string;
};

function stripHtml(html: string) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function extractThumbnail(html: string | undefined) {
  if (!html) return undefined;
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match?.[1];
}

function excerptFrom(item: FeedItem, max = 160) {
  const raw =
    item.contentSnippet ||
    stripHtml(item["content:encoded"] || item.content || "");
  if (raw.length <= max) return raw;
  return `${raw.slice(0, max).trim()}…`;
}

export function getMediumProfileUrl() {
  return PROFILE_URL;
}

export async function getMediumPosts(limit = 6): Promise<MediumPost[]> {
  try {
    const parser = new Parser({
      customFields: {
        item: ["content:encoded"],
      },
    });

    const response = await fetch(FEED_URL, {
      headers: { Accept: "application/rss+xml, application/xml, text/xml" },
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`Medium RSS HTTP ${response.status}`);
    }

    const xml = await response.text();
    const feed = await parser.parseString(xml);
    const items = (feed.items ?? []) as FeedItem[];

    return items.slice(0, limit).map((item) => {
      const encoded = item["content:encoded"] || item.content;
      return {
        title: item.title?.trim() || "Tanpa judul",
        link: item.link || PROFILE_URL,
        pubDate: item.pubDate || "",
        excerpt: excerptFrom(item),
        categories: item.categories ?? [],
        thumbnail: extractThumbnail(encoded),
      };
    });
  } catch (error) {
    console.error("Failed to fetch Medium feed:", error);
    return [];
  }
}

export function formatMediumDate(value: string) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}
