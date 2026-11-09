import { shareImage } from "@/lib/og";

// Build time source for public/og.jpg (scripts/make-og.mjs). Not linked anywhere on the site.
export const dynamic = "force-static";

export async function GET() {
  return shareImage();
}
