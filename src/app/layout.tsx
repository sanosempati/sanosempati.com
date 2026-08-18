import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { MemphisShapes } from "@/components/MemphisShapes";
import { site } from "@/lib/content";

const untitledSans = localFont({
  src: [
    {
      path: "../../public/fonts/UntitledSansVF-Roman.woff2",
      weight: "300 900",
      style: "normal",
    },
    {
      path: "../../public/fonts/UntitledSansVF-Italic.woff2",
      weight: "300 900",
      style: "italic",
    },
  ],
  variable: "--font-untitled-sans",
  display: "swap",
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-bricolage",
  display: "swap",
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  authors: [{ name: site.name, url: site.linkedin }],
  creator: site.name,
  openGraph: {
    title: site.title,
    description: site.description,
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${untitledSans.variable} ${bricolage.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-hidden font-sans">
        <MemphisShapes />
        {children}
      </body>
    </html>
  );
}
