"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  animate as motionAnimate,
} from "framer-motion";
import { Button } from "@/components/ui/button";

type MediaCardProps = {
  media: string;
  isVideo?: boolean;
  label: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaIcon?: React.ReactNode;
};

function MediaCard({
  media,
  isVideo = false,
  label,
  title,
  subtitle,
  ctaText,
  ctaIcon,
}: MediaCardProps) {
  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl shadow-2xl">
      {isVideo ? (
        <video
          src={media}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <img
          src={media}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      <div className="relative z-10 flex h-full flex-col items-center justify-end px-6 pb-10 text-center text-white">
        <span className="mb-2 text-sm font-medium text-gray-200">{label}</span>
        <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
        <p className="mt-2 max-w-md text-gray-300">{subtitle}</p>
        <Button
          size="lg"
          className="mt-6 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700"
        >
          {ctaIcon && <span className="mr-2">{ctaIcon}</span>}
          {ctaText}
        </Button>
      </div>
    </div>
  );
}

export default function MediaCardSliderDraggable() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [active, setActive] = useState<number>(1); // middle card active by default

  const cards = [
    {
      media: "/images/logo.png",
      label: "Ray-Ban Meta",
      title: "Find your perfect match",
      subtitle: "See how you look in 20+ styles and colours.",
      ctaText: "Try on virtually",
      ctaIcon: <span>👓</span>,
    },
    {
      media: "/videos/helpsales.mp4",
      isVideo: true,
      label: "Oakley Meta",
      title: "Design meets technology",
      subtitle: "Experience the new era of smart eyewear.",
      ctaText: "Learn more",
      ctaIcon: <span>🚀</span>,
    },
    {
      media: "/images/logo.png",
      label: "Meta Style",
      title: "Bold & Modern",
      subtitle: "Reimagine eyewear with futuristic designs.",
      ctaText: "Discover",
      ctaIcon: <span>✨</span>,
    },
  ];

  useEffect(() => {
    const update = () => {
      setContainerWidth(containerRef.current?.offsetWidth ?? window.innerWidth);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Dynamically compute card widths
  const getCardWidth = (isActive: boolean) => {
    if (!containerWidth) return 300;
    return isActive ? containerWidth * 0.7 : containerWidth * 0.5;
  };

  const GAP = 20;

  const centerTo = (index: number) => {
    if (!containerWidth) return;
    const cardWidth = getCardWidth(true);
    const centerOffset = (containerWidth - cardWidth) / 2;
    const target = -(index * (getCardWidth(false) + GAP) - centerOffset);
    motionAnimate(x, target, { type: "spring", stiffness: 300, damping: 30 });
    setActive(index);
  };

  useEffect(() => {
    centerTo(active);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerWidth]);

  return (
    <section className="flex items-center justify-center w-full py-16">
      <div ref={containerRef} className="w-full max-w-7xl overflow-hidden px-6">
        <motion.div
          style={{ x }}
          drag="x"
          dragElastic={0.15}
          onDragEnd={() => centerTo(active)}
          className="flex items-center"
        >
          {cards.map((card, i) => {
            const isActive = i === active;
            return (
              <motion.div
                key={i}
                onClick={() => centerTo(i)}
                animate={{
                  width: getCardWidth(isActive),
                  opacity: isActive ? 1 : 0.6,
                  scale: isActive ? 1 : 0.85,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="flex-shrink-0"
                style={{ marginRight: GAP }}
              >
                <MediaCard {...card} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
