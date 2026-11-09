import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

async function dataUrl(path: string) {
  const buf = await readFile(join(process.cwd(), "public", path));
  return `data:${/\.png$/i.test(path) ? "image/png" : "image/jpeg"};base64,${buf.toString("base64")}`;
}

// 1200x630 share card: a front page of The Sanity Gazette.
export async function shareImage() {
  const photo = await dataUrl("/images/og-photo.jpg");
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#efe9dc", color: "#15130f" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "48px 48px 44px 60px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 18, letterSpacing: 3, borderTop: "2px solid #15130f", borderBottom: "2px solid #15130f", padding: "8px 0" }}>
            <span>VOL. XI</span>
            <span>HYDERABAD EDITION</span>
          </div>
          <div style={{ fontSize: 64, fontWeight: 800, fontFamily: "serif", marginTop: 18, letterSpacing: -1 }}>The Sanity Gazette</div>
          <div style={{ height: 6, borderTop: "4px solid #15130f", borderBottom: "1px solid #15130f", marginTop: 8 }} />
          <div style={{ fontSize: 22, letterSpacing: 3, color: "#c8261b", marginTop: 30, fontWeight: 700 }}>EXCLUSIVE</div>
          <div style={{ fontSize: 58, lineHeight: 1.02, fontWeight: 800, fontFamily: "serif", marginTop: 10, letterSpacing: -1.5 }}>
            Vivek Muralidharan caught doing stand-up again
          </div>
          <div style={{ display: "flex", marginTop: "auto", alignItems: "center", gap: 18 }}>
            <div style={{ background: "#c8261b", color: "#fff6ee", fontSize: 24, padding: "12px 22px", fontWeight: 700, border: "2px solid #15130f" }}>
              Sanity in Diversity · On tour
            </div>
            <div style={{ fontSize: 22 }}>@mightbevivek</div>
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={photo} width={480} height={630} style={{ objectFit: "cover", filter: "grayscale(1)" }} alt="" />
      </div>
    ),
    { width: 1200, height: 630 },
  );
}

export async function iconImage(size: number) {
  const logo = await dataUrl("/images/logo.png");
  return new ImageResponse(
    // eslint-disable-next-line @next/next/no-img-element
    <img src={logo} width={size} height={size} style={{ objectFit: "cover", borderRadius: size / 2 }} alt="" />,
    { width: size, height: size },
  );
}
