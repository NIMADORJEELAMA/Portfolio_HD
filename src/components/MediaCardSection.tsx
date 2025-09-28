"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

type MediaCardProps = {
  media: string; // image or video path
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
    <div className="w-full overflow-hidden rounded-3xl shadow-2xl">
      <div className="relative h-[450px] w-full">
        {/* Background media */}
        {isVideo ? (
          <video
            src={media}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-fill-custom"
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={media}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-end px-6 pb-10 text-center text-white">
          <span className="mb-2 text-sm font-medium text-gray-200">
            {label}
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold sm:text-3xl"
          >
            {title}
          </motion.h2>
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
    </div>
  );
}

export default function MediaCardSection() {
  return (
    <section className="mx-auto my-16 w-full max-w-6xl px-6">
      <div className="grid gap-8 md:grid-cols-2">
        <MediaCard
          media="./assets/images/logo.png"
          label="Ray-Ban Meta"
          title="Find your perfect match"
          subtitle="See how you look in 20+ styles and colours."
          ctaText="Try on virtually"
          ctaIcon={<span>👓</span>}
        />
        <MediaCard
          media="/videos/helpsales.mp4"
          isVideo
          label="Oakley Meta"
          title="Design meets technology"
          subtitle="Experience the new era of smart eyewear."
          ctaText="Learn more"
          ctaIcon={<span>🚀</span>}
        />
      </div>
    </section>
  );
}
