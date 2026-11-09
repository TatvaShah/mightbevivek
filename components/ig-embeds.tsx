"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

// Official Instagram embeds: blockquote.instagram-media plus embed.js, processed client side.
// The script loads only when the section nears the viewport, so it never slows first paint.
export function IgEmbeds({ urls }: { urls: string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const load = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
        return;
      }
      const s = document.createElement("script");
      s.src = "https://www.instagram.com/embed.js";
      s.async = true;
      s.onload = () => window.instgrm?.Embeds.process();
      document.body.appendChild(s);
    };
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect();
          load();
        }
      },
      { rootMargin: "800px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="embeds">
      {urls.map((u) => (
        <div key={u} className="embed-cell">
          <blockquote
            className="instagram-media"
            data-instgrm-permalink={`${u}?utm_source=ig_embed&utm_campaign=loading`}
            data-instgrm-version="14"
            style={{ background: "#fff", border: 0, margin: 0, maxWidth: 540, minWidth: 280, width: "100%" }}
          >
            <a href={u} target="_blank" rel="noopener noreferrer">
              Watch this reel on Instagram
            </a>
          </blockquote>
        </div>
      ))}
    </div>
  );
}
