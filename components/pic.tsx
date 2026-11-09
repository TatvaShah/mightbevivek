import Image from "next/image";
import { imageSize } from "@/lib/image-loader";

type Props = { src: string; alt: string; sizes: string; className?: string; priority?: boolean };

// next/image with intrinsic size from the build time manifest (static WebP and AVIF, no Vercel optimisation).
export function Pic({ src, alt, sizes, className, priority }: Props) {
  const s = imageSize(src) ?? { width: 1200, height: 1200 };
  return <Image src={src} alt={alt} width={s.width} height={s.height} sizes={sizes} className={className} priority={priority} />;
}
