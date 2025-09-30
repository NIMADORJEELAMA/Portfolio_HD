"use client";

import React, { useRef, useState, useEffect } from "react";
import { projects } from "@/lib/constants";

type Project = {
  id: number;
  name: string;
  role: string;
  showcase: string;
  description: string;
  thumbnail: string;
  media: string;
  isVideo?: boolean;
  techStack?: string[];
  projectLink?: string;
};

export default function CreativePartners() {
  const [selected, setSelected] = useState<Project>(projects[0]);
  const thumbsRef = useRef<HTMLDivElement | null>(null);

  // drag state
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    isDown.current = true;
    startX.current = e.pageX - (thumbsRef.current?.offsetLeft || 0);
    scrollLeft.current = thumbsRef.current?.scrollLeft || 0;
    if (thumbsRef.current) {
      thumbsRef.current.style.cursor = "grabbing";
    }
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    if (thumbsRef.current) {
      thumbsRef.current.style.cursor = "grab";
    }
  };

  const handleMouseUp = () => {
    isDown.current = false;
    if (thumbsRef.current) {
      thumbsRef.current.style.cursor = "grab";
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - (thumbsRef.current?.offsetLeft || 0);
    const walk = (x - startX.current) * 1.2;
    if (thumbsRef.current)
      thumbsRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleProjectSelect = (
    project: Project,
    element: HTMLButtonElement
  ) => {
    setSelected(project);
    if (thumbsRef.current) {
      const container = thumbsRef.current;
      const itemWidth = element.offsetWidth;
      const containerWidth = container.offsetWidth;
      const itemOffset = element.offsetLeft;

      const newScrollLeft = itemOffset - containerWidth / 2 + itemWidth / 2;
      container.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const initialElement = thumbsRef.current?.querySelector(
      `button[data-id="${selected.id}"]`
    ) as HTMLButtonElement;
    if (initialElement && thumbsRef.current) {
      const container = thumbsRef.current;
      const itemWidth = initialElement.offsetWidth;
      const containerWidth = container.offsetWidth;
      const itemOffset = initialElement.offsetLeft;

      const newScrollLeft = itemOffset - containerWidth / 2 + itemWidth / 2;
      container.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  }, [selected.id]);

  return (
    <section className="bg-white text-gray-900 px-6 py-10 min-h-screen">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2
          className="text-4xl font-bold mb-2 bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent"
          style={{ lineHeight: 2 }}
        >
          Projects
        </h2>
        <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          'Crafted with passion, built with purpose.'
        </p>
      </div>

      <div className="relative mb-16">
        <div
          ref={thumbsRef}
          className="overflow-x-auto overflow-y-hidden w-full py-10 scrollbar-hide"
          style={{
            cursor: "grab",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div
            className="flex gap-8 items-center px-10"
            style={{ width: "max-content" }}
          >
            {projects.map((p) => {
              const isSelected = selected.id === p.id;
              return (
                <button
                  key={p.id}
                  data-id={p.id}
                  onClick={(e) => handleProjectSelect(p, e.currentTarget)}
                  className={`flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 ease-out transform hover:scale-105 relative group
                    ${
                      isSelected
                        ? "w-36 h-36 ring-4 ring-blue-500 ring-opacity-60 scale-110 shadow-lg shadow-blue-500/25"
                        : "w-28 h-28 opacity-70 hover:opacity-100"
                    }`}
                  style={{
                    minWidth: isSelected ? "164px" : "112px",
                    minHeight: isSelected ? "164px" : "112px",
                  }}
                  aria-label={`Select ${p.name}'s work`}
                >
                  <img
                    src={p.thumbnail}
                    alt={p.name}
                    className="w-full h-full object-cover pointer-events-none transition-transform duration-300"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-200/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <p className="text-gray-900 text-xs font-medium truncate">
                      {p.name}
                    </p>
                    <p className="text-gray-600 text-xs truncate">{p.role}</p>
                  </div>
                  {isSelected && (
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 via-transparent to-transparent" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6 order-2 lg:order-1">
          <div>
            <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              {selected.name}
            </h3>
            <p className="text-blue-600 text-lg font-medium">{selected.role}</p>
          </div>

          <div className="bg-gray-100 rounded-xl p-2 border border-gray-300">
            <div className="flex flex-wrap gap-2">
              {selected.techStack?.map((tech, index) => (
                <span
                  key={index}
                  className="bg-white border border-gray-300 text-gray-800 text-sm px-3 py-1 rounded-lg shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed">
            {selected.description}
          </p>

          <a
            href={selected.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              View Portfolio
            </button>
          </a>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative group">
            {selected.isVideo ? (
              <video
                src={selected.media}
                controls
                autoPlay
                loop
                className="w-full rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]"
              />
            ) : (
              <img
                src={selected.media}
                alt={selected.showcase}
                className="w-full rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-[1.02] object-cover aspect-[4/3]"
              />
            )}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
