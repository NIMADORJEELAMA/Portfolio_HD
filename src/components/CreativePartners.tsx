"use client";

import React, { useRef, useState, useEffect } from "react";

type Project = {
  id: number;
  name: string;
  role: string;
  showcase: string;
  description: string;
  thumbnail: string;
  media: string;
  isVideo?: boolean;
};

const projects: Project[] = [
  {
    id: 1,
    name: "LDC",
    role: "London Dermatology Clinic",
    showcase: "Robots building Mars",
    description:
      "I use Kling AI every day. It's amazing to see the almost daily progress it makes.",
    thumbnail: "./images/ldc.png",
    media: "./images/ldc.png",
  },
  {
    id: 2,
    name: "DS",
    role: "Dental Software",
    showcase: "Futuristic City Concepts",
    description:
      "Exploring new AI-assisted workflows for architectural visualization and urban planning concepts.",
    thumbnail: "./images/dental.png",
    media:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Marshal",
    role: "Logibook",
    showcase: "Abstract Animations",
    description:
      "Creating mesmerizing visual experiences through AI-powered motion graphics and dynamic compositions.",
    thumbnail: "./images/logibook.jpg",
    media:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Hlj",
    role: "HLJ ERP",
    showcase: "Cyberpunk Portraits",
    description:
      "Blending traditional art techniques with cutting-edge AI tools to create stunning character designs.",
    thumbnail: "./images/hlj_erp.png",
    media:
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    name: "HS",
    role: "Helpsales CRM",
    showcase: "Fantasy Landscapes",
    description:
      "Crafting immersive worlds and environments that push the boundaries of imagination and creativity.",
    thumbnail: "./images/hs.png",
    media:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    name: "GM",
    role: "Garments Mantra",
    showcase: "Particle Simulations",
    description:
      "Specializing in complex particle systems and dynamic simulations for film and interactive media.",
    thumbnail: "./images/gm.png",
    media:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&h=400&fit=crop",
  },
  {
    id: 7,
    name: "TMS",
    role: "The Mewa Shoppe",
    showcase: "Brand Experiences",
    description:
      "Designing innovative brand experiences that combine storytelling with cutting-edge visual technology.",
    thumbnail: "./images/tms_logos.png",
    media:
      "https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?w=600&h=400&fit=crop",
  },
  {
    id: 8,
    name: "AM",
    role: "Asset Mantra",
    showcase: "Interactive Worlds",
    description:
      "Building immersive game environments that blur the line between reality and digital artistry.",
    thumbnail: "./images/assetmantra.png",
    media:
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&h=400&fit=crop",
  },
  {
    id: 9,
    name: "Déborah",
    role: "AI Artist",
    showcase: "Robots building Mars",
    description:
      "I use Kling AI every day. It's amazing to see the almost daily progress it makes.",
    thumbnail:
      "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?w=300&h=300&fit=crop",
    media:
      "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?w=600&h=400&fit=crop",
  },
  {
    id: 10,
    name: "John Martinez",
    role: "3D Designer",
    showcase: "Futuristic City Concepts",
    description:
      "Exploring new AI-assisted workflows for architectural visualization and urban planning concepts.",
    thumbnail:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=300&fit=crop",
    media:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
  },
  {
    id: 11,
    name: "Sarah Chen",
    role: "Motion Designer",
    showcase: "Abstract Animations",
    description:
      "Creating mesmerizing visual experiences through AI-powered motion graphics and dynamic compositions.",
    thumbnail:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
    media:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
  },
  {
    id: 12,
    name: "Alex Rivera",
    role: "Digital Artist",
    showcase: "Cyberpunk Portraits",
    description:
      "Blending traditional art techniques with cutting-edge AI tools to create stunning character designs.",
    thumbnail:
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=300&h=300&fit=crop",
    media:
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop",
  },
  {
    id: 13,
    name: "Maya Patel",
    role: "Concept Artist",
    showcase: "Fantasy Landscapes",
    description:
      "Crafting immersive worlds and environments that push the boundaries of imagination and creativity.",
    thumbnail:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",
    media:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
  },
  {
    id: 14,
    name: "David Kim",
    role: "Visual Effects Artist",
    showcase: "Particle Simulations",
    description:
      "Specializing in complex particle systems and dynamic simulations for film and interactive media.",
    thumbnail:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=300&h=300&fit=crop",
    media:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&h=400&fit=crop",
  },
  {
    id: 15,
    name: "Luna Rodriguez",
    role: "Creative Director",
    showcase: "Brand Experiences",
    description:
      "Designing innovative brand experiences that combine storytelling with cutting-edge visual technology.",
    thumbnail:
      "https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?w=300&h=300&fit=crop",
    media:
      "https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?w=600&h=400&fit=crop",
  },
  {
    id: 16,
    name: "Marcus Thompson",
    role: "Game Designer",
    showcase: "Interactive Worlds",
    description:
      "Building immersive game environments that blur the line between reality and digital artistry.",
    thumbnail:
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=300&h=300&fit=crop",
    media:
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&h=400&fit=crop",
  },
  {
    id: 17,
    name: "LDC",
    role: "London Dermatology Clinic",
    showcase: "Robots building Mars",
    description:
      "I use Kling AI every day. It's amazing to see the almost daily progress it makes.",
    thumbnail: "./images/ldc.png",
    media: "./images/ldc.png",
  },
  {
    id: 18,
    name: "DS",
    role: "Dental Software",
    showcase: "Futuristic City Concepts",
    description:
      "Exploring new AI-assisted workflows for architectural visualization and urban planning concepts.",
    thumbnail: "./images/dental.png",
    media:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
  },
  {
    id: 19,
    name: "Marshal",
    role: "Logibook",
    showcase: "Abstract Animations",
    description:
      "Creating mesmerizing visual experiences through AI-powered motion graphics and dynamic compositions.",
    thumbnail: "./images/logibook.jpg",
    media:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
  },
  {
    id: 20,
    name: "Hlj",
    role: "HLJ ERP",
    showcase: "Cyberpunk Portraits",
    description:
      "Blending traditional art techniques with cutting-edge AI tools to create stunning character designs.",
    thumbnail: "./images/hlj_erp.png",
    media:
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop",
  },
  {
    id: 21,
    name: "HS",
    role: "Helpsales CRM",
    showcase: "Fantasy Landscapes",
    description:
      "Crafting immersive worlds and environments that push the boundaries of imagination and creativity.",
    thumbnail: "./images/hs.png",
    media:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
  },
  {
    id: 22,
    name: "GM",
    role: "Garments Mantra",
    showcase: "Particle Simulations",
    description:
      "Specializing in complex particle systems and dynamic simulations for film and interactive media.",
    thumbnail: "./images/gm.png",
    media:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&h=400&fit=crop",
  },
  {
    id: 23,
    name: "TMS",
    role: "The Mewa Shoppe",
    showcase: "Brand Experiences",
    description:
      "Designing innovative brand experiences that combine storytelling with cutting-edge visual technology.",
    thumbnail: "./images/tms_logos.png",
    media:
      "https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?w=600&h=400&fit=crop",
  },
  {
    id: 24,
    name: "AM",
    role: "Asset Mantra",
    showcase: "Interactive Worlds",
    description:
      "Building immersive game environments that blur the line between reality and digital artistry.",
    thumbnail: "./images/assetmantra.png",
    media:
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&h=400&fit=crop",
  },
  {
    id: 25,
    name: "Déborah",
    role: "AI Artist",
    showcase: "Robots building Mars",
    description:
      "I use Kling AI every day. It's amazing to see the almost daily progress it makes.",
    thumbnail:
      "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?w=300&h=300&fit=crop",
    media:
      "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?w=600&h=400&fit=crop",
  },
  {
    id: 26,
    name: "John Martinez",
    role: "3D Designer",
    showcase: "Futuristic City Concepts",
    description:
      "Exploring new AI-assisted workflows for architectural visualization and urban planning concepts.",
    thumbnail:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=300&fit=crop",
    media:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
  },
  {
    id: 27,
    name: "Sarah Chen",
    role: "Motion Designer",
    showcase: "Abstract Animations",
    description:
      "Creating mesmerizing visual experiences through AI-powered motion graphics and dynamic compositions.",
    thumbnail:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
    media:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
  },
  {
    id: 28,
    name: "Alex Rivera",
    role: "Digital Artist",
    showcase: "Cyberpunk Portraits",
    description:
      "Blending traditional art techniques with cutting-edge AI tools to create stunning character designs.",
    thumbnail:
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=300&h=300&fit=crop",
    media:
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop",
  },
  {
    id: 29,
    name: "Maya Patel",
    role: "Concept Artist",
    showcase: "Fantasy Landscapes",
    description:
      "Crafting immersive worlds and environments that push the boundaries of imagination and creativity.",
    thumbnail:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",
    media:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
  },
  {
    id: 30,
    name: "David Kim",
    role: "Visual Effects Artist",
    showcase: "Particle Simulations",
    description:
      "Specializing in complex particle systems and dynamic simulations for film and interactive media.",
    thumbnail:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=300&h=300&fit=crop",
    media:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&h=400&fit=crop",
  },
  {
    id: 31,
    name: "Luna Rodriguez",
    role: "Creative Director",
    showcase: "Brand Experiences",
    description:
      "Designing innovative brand experiences that combine storytelling with cutting-edge visual technology.",
    thumbnail:
      "https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?w=300&h=300&fit=crop",
    media:
      "https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?w=600&h=400&fit=crop",
  },
  {
    id: 32,
    name: "Marcus Thompson",
    role: "Game Designer",
    showcase: "Interactive Worlds",
    description:
      "Building immersive game environments that blur the line between reality and digital artistry.",
    thumbnail:
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=300&h=300&fit=crop",
    media:
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&h=400&fit=crop",
  },
];

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
          "Crafted with passion, built with purpose."
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

          <div className="bg-gray-100 rounded-xl p-6 border border-gray-300">
            <p className="text-gray-600 mb-2">Current Showcase:</p>
            <p className="text-xl font-semibold text-gray-900">
              {selected.showcase}
            </p>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed">
            {selected.description}
          </p>

          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View Portfolio
          </button>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative group">
            {selected.isVideo ? (
              <video
                src={selected.media}
                controls
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
