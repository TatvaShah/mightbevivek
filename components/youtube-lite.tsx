"use client";

import { useState } from "react";
import { Pic } from "./pic";

// Click to play: the YouTube iframe (and its weight) only loads when someone asks for it.
export function YouTubeLite({ id, title, image }: { id: string; title: string; image: string }) {
  const [on, setOn] = useState(false);
  if (on) {
    return (
      <div className="yt">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }
  return (
    <button type="button" className="yt yt-poster" onClick={() => setOn(true)} aria-label={`Play ${title}`}>
      <Pic src={image} alt="" sizes="(max-width: 900px) 92vw, 60vw" />
      <span className="yt-play" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="28" height="28"><path d="M8 5v14l11-7z" fill="currentColor" /></svg>
        <span className="mono">Play the full special</span>
      </span>
    </button>
  );
}
