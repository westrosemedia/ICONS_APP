"use client";

import { useEffect } from "react";

const PERMALINK = "https://www.instagram.com/reel/DZ-uyvQvfDi/";
const EMBED_SRC = "https://www.instagram.com/embed.js";

export default function InstagramReel() {
  useEffect(() => {
    const process = () => {
      const instagram = (
        window as Window & { instgrm?: { Embeds: { process: () => void } } }
      ).instgrm;
      instagram?.Embeds.process();
    };

    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${EMBED_SRC}"]`,
    );
    if (existing) {
      process();
      return;
    }

    const script = document.createElement("script");
    script.src = EMBED_SRC;
    script.async = true;
    script.onload = process;
    document.body.appendChild(script);
  }, []);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={PERMALINK}
      data-instgrm-version="14"
      style={{
        background: "#FFF",
        border: 0,
        margin: "0 auto",
        maxWidth: 540,
        minWidth: 280,
        width: "100%",
      }}
    >
      <a href={PERMALINK} target="_blank" rel="noopener noreferrer">
        Watch this reel on Instagram
      </a>
    </blockquote>
  );
}
