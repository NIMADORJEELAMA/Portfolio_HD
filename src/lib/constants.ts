import { Layers, Rocket, Gauge, Activity } from "lucide-react";
import { FaReact, FaPython, FaNodeJs } from "react-icons/fa";
import {
  SiMongodb,
  SiMysql,
  SiDjango,
  SiAngular,
  SiFlutter,
  SiDotnet,
} from "react-icons/si";

export const navLinks = [
  { name: "Features", href: "#features" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export const brands = [
  { id: 1, name: "React", icon: FaReact, color: "#61DAFB" },
  { id: 2, name: "Python", icon: FaPython, color: "#3776AB" },
  { id: 3, name: "Node.js", icon: FaNodeJs, color: "#68A063" },
  { id: 4, name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { id: 5, name: "MySQL", icon: SiMysql, color: "#00758F" },
  { id: 6, name: "Django", icon: SiDjango, color: "#092E20" },
  { id: 7, name: "Angular", icon: SiAngular, color: "#DD0031" },
  { id: 8, name: "React Native", icon: FaReact, color: "#61DAFB" },
  { id: 9, name: "Flutter", icon: SiFlutter, color: "#02569B" },
  { id: 10, name: ".Net", icon: SiDotnet, color: "#512BD4" },
];
export const features = [
  {
    title: "Task Organizer",
    description:
      "Easily sort, prioritize & track your to-dos in one clean workspace.",
    gradient: "from-amber-400 via-rose-500 to-fuchsia-600",
    image: "/images/task-organizer.png",
  },
  {
    title: "Focus Timer",
    description: "Built-in Pomodoro and time-blocking to avoid burnout.",
    icon: "Timer",
  },
  {
    title: "Smart Scheduling",
    description:
      "Plan your day with a drag-and-drop calendar that adapts to your workflow.",
    icon: "CalendarCheck2",
  },
  {
    title: "Custom Reminders",
    description:
      "Timely alerts and gentle nudges so nothing slips through the cracks.",
    icon: "BellRing",
  },
];

export const projects = [
  {
    id: 1,
    name: "LDC",
    role: "London Dermatology Clinic",
    showcase: "Robots building Mars",
    description:
      "Healthcare system with patient records, doctor rosters, prescriptions, lab results, billing, and task management Implemented Ag-Grid for tables, with Bootstrap, MUI, and SCSS for responsive UI.Managed state with Redux and built the web app using React + TypeScript.",
    thumbnail: "./images/ldc.png",
    media: "./videos/ldc_video.mp4",
    isVideo: true,
    projectTitle: "LONDONDERMATOLOGYCLINIC",
    projectLink: "https://ldc.goldenbuzz.in",
    techStack: ["HTML", "SCSS", "React.Js", ".NET"],
  },
  {
    id: 2,
    name: "DS",
    role: "Dental Software",
    showcase: "Futuristic City Concepts",
    thumbnail: "./images/dental.png",
    media:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
    isVideo: false,
    projectTitle: "DENTALSOFTWARE",
    projectLink: "Link",
    techStack: ["HTML", "SCSS", "React.Js", ".NET"],
    description:
      "Built a dental software solution managing multiple stores across the US. Implemented Redux for state management and enhanced UI/UX with Ant Design, MUI, and Bootstrap.",
  },
  {
    id: 3,
    name: "Marshal",
    role: "Logibook",
    showcase: "Abstract Animations",
    thumbnail: "./images/logibook.jpg",
    media: "./videos/helpsales.mp4",
    isVideo: true,
    projectTitle: "LOGIBOOK",
    projectLink: "Link",
    techStack: [".NET", "HTML", "SCSS", "Angular"],
    description:
      "Developed a logistics management solution with services and store management. Implemented Redux for state handling and improved UI/UX with Ant Design, MUI, and Bootstrap.",
  },
  {
    id: 4,
    name: "Hlj",
    role: "HLJ ERP",
    showcase: "Cyberpunk Portraits",
    thumbnail: "./images/hlj_erp.png",
    media:
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop",
    isVideo: false,
    projectTitle: "HLJ ERP",
    projectLink: "Link",
    techStack: ["React Native", ".NET", "CSS", "JavaScript"],
    description:
      "Developed a sales app for managing cold coin products of various carats and weights. Integrated billing with Bluetooth printing and optimized performance using React’s useMemo.",
  },
  {
    id: 5,
    name: "HS",
    role: "Helpsales CRM",
    showcase: "Fantasy Landscapes",
    thumbnail: "./images/hs.png",
    media: "./videos/helpsales_vid.mp4",
    isVideo: true,
    projectTitle: "HELPSALESCRMAPP",
    projectLink:
      "https://play.google.com/store/apps/details?id=com.rebin.HelpSales&hl=en-us",
    techStack: ["React Native", ".NET"],
    description:
      "Built a mobile CRM app to capture leads and manage contacts, with modules for projects, follow-ups, and real-time updates. Integrated a Voice Assistant for hands-free use, along with deep linking and push notifications.",
  },
  {
    id: 6,
    name: "GM",
    role: "Garments Mantra",
    showcase: "Particle Simulations",
    thumbnail: "./images/gm.png",
    media:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&h=400&fit=crop",
    isVideo: false,
    projectTitle: "Garments Mantra",
    projectLink:
      "https://play.google.com/store/apps/details?id=com.rebin.garmentsmantra&hl=en-us",
    techStack: ["React Native", ".NET"],
    description:
      "Developed a robust ERP for the apparel industry to streamline order management, production planning, and pre/post-production activities. Enables efficient scheduling, supplier and customer management, and enhances overall operational efficiency.",
  },
  {
    id: 7,
    name: "TMS",
    role: "The Mewa Shoppe",
    showcase: "Brand Experiences",
    thumbnail: "./images/tms_logos.png",
    media: "./videos/mewashoppe_video.mp4",
    isVideo: true,
    projectTitle: "THE MEWA SHOPPE",
    projectLink:
      "https://play.google.com/store/apps/details?id=com.themewashoppe&hl=en-us",
    techStack: ["React Native", ".NET"],
    description:
      "Developed a mobile app for premium dry fruits, snacks, and sweets, enabling users to browse and order easily. Features include curated product selections, fresh supplier sourcing, and a seamless shopping experience.",
  },
  {
    id: 8,
    name: "AM",
    role: "Asset Mantra",
    showcase: "Interactive Worlds",
    thumbnail: "./images/assetmantra.png",
    media:
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&h=400&fit=crop",
    isVideo: false,
    projectTitle: "ASSET MANTRA",
    projectLink:
      "https://play.google.com/store/apps/details?id=com.reb.assetmantra&hl=en-us",
    techStack: ["React Native", ".NET"],
    description:
      "Developed a fixed asset management app to streamline tracking, maintenance, and management of machinery, electronics, and furniture. Features include real-time updates, depreciation tracking, audit logs, vendor management, and cloud-based security for enhanced efficiency.",
  },
  {
    id: 9,
    name: "Swastik Rice",
    role: "Swastik Rice CRM App",
    showcase: "Robots building Mars",
    thumbnail:
      "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?w=300&h=300&fit=crop",
    media:
      "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?w=600&h=400&fit=crop",
    isVideo: false,
    projectTitle: "Swastik Rice CRM App",
    projectLink: "Link",
    techStack: ["React Native", ".NET"],
    description:
      "Developed a CRM app to manage inventory, stock in/out, and sales orders, providing efficient tracking and streamlined business operations.",
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
