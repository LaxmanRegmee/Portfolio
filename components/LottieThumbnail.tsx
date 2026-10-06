"use client";

import { Lottie } from "lottie-react";

interface LottieThumbnailProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}

export function LottieThumbnail({ src, className = "", style = {} }: LottieThumbnailProps) {
  return (
    <div
      className={`relative aspect-video overflow-hidden ${className}`}
      style={style}
      aria-hidden="true"
    >
      <Lottie
        src={src}
        loop
        autoplay
        style={{ width: "100%", height: "100%" }}
        renderer="svg"
        rendererSettings={{
          preserveAspectRatio: "xMidYMid slice",
        }}
      />
    </div>
  );
}