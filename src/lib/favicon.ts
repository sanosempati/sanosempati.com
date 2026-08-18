export function faviconUrl(domain: string, size = 128) {
  return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=${size}`;
}

export function domainFromUrl(url?: string) {
  if (!url) return undefined;
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return undefined;
  }
}

export function companyInitials(label: string) {
  const words = label
    .replace(/^PT\s+/i, "")
    .split(/\s+/)
    .filter(Boolean);
  const picked = words.slice(0, 2).map((word) => word[0]?.toUpperCase() ?? "");
  return picked.join("") || "?";
}
