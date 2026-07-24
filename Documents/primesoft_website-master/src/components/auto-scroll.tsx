"use client";

import React from "react";
import Image from "next/image";

const DATA = [
  "/images/laptop.jpeg",
  "/images/process.jpeg",
  "/images/lion.jpeg",
  "/images/process.jpeg",
  "/images/laptop.jpeg",
  "/images/process.jpeg",
  "/images/lion.jpeg",
  "/images/process.jpeg",
  "/images/laptop.jpeg",
  "/images/laptop.jpeg",
  "/images/laptop.jpeg",
  "/images/process.jpeg",
];

const MAX_SLOTS = 12;

export default function InfiniteCarousel() {
  const slots = Array.from({ length: MAX_SLOTS }, (_, i) =>
    i < DATA.length ? DATA[i] : null,
  );

  return (
    <div
      data-aos="fade-up"
      className="pointer-events-none z-20 absolute top-90 inset-0 h-150 lg:h-170 2xl:h-300 grid overflow-hidden [mask:linear-gradient(90deg,#0000,red_25%_75%,#0000)]"
      // Scale perspective with viewport width so depth stays proportional
      style={{ perspective: "clamp(35em, 50vw, 80em)" }}
    >
      <div
        className="w-full grid transform-3d animate-[ry_100s_linear_infinite]"
        style={{ "--n": MAX_SLOTS } as React.CSSProperties}
      >
        {slots.map((src, i) =>
          src ? (
            <div
              key={i}
              className="[grid-area:1/1] place-self-center aspect-7/10 rounded-[1.5em] backface-hidden overflow-hidden"
              style={
                {
                  "--i": i,
                  // Card width scales from 17.5em up to 28em on very large screens
                  "--w": "clamp(17.5em, 20vw, 36em)",
                  width: "var(--w)",
                  "--ba": `calc(1turn / ${MAX_SLOTS})`,
                  transform:
                    "rotateY(calc(var(--i) * var(--ba))) translateZ(calc(-1 * (0.5 * var(--w) + 0.5em) / tan(0.5 * var(--ba))))",
                } as React.CSSProperties
              }
            >
              <Image
                rel={"preload"}
                src={src}
                alt={`Gallery image ${i + 1}`}
                fill
                className="object-cover"
                sizes="(min-width: 1536px) 28em, (min-width: 1024px) 20vw, 17.5em"
                quality={85}
                priority
              />
            </div>
          ) : (
            <div
              key={i}
              className="[grid-area:1/1] place-self-center aspect-7/10 rounded-[1.5em] backface-hidden opacity-0"
              style={
                {
                  "--i": i,
                  "--w": "clamp(17.5em, 20vw, 28em)",
                  width: "var(--w)",
                  "--ba": `calc(1turn / ${MAX_SLOTS})`,
                  transform:
                    "rotateY(calc(var(--i) * var(--ba))) translateZ(calc(-1 * (0.5 * var(--w) + 0.5em) / tan(0.5 * var(--ba))))",
                } as React.CSSProperties
              }
            />
          ),
        )}
      </div>
    </div>
  );
}
