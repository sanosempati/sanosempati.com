import Image from "next/image";
import { site } from "@/lib/content";

type Props = {
  className?: string;
  /** Untuk latar gelap: invert jadi putih */
  invert?: boolean;
};

export function Logo({ className = "", invert = false }: Props) {
  return (
    <Image
      src="/logo-sano.png"
      alt={site.name}
      width={676}
      height={358}
      priority
      className={`h-8 w-auto object-contain md:h-9 ${invert ? "brightness-0 invert" : ""} ${className}`}
    />
  );
}
