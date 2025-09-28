import { Layers, Rocket, Gauge, Activity } from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaGlobe,
} from "react-icons/fa";
import { SiMongodb, SiMysql } from "react-icons/si";
export const navLinks = [
  { name: "Features", href: "#features" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export const brands = [
  { id: 1, name: "React", icon: FaReact, color: "#61DAFB" }, // React cyan
  { id: 2, name: "Python", icon: FaPython, color: "#3776AB" }, // Python blue
  { id: 3, name: "Node.js", icon: FaNodeJs, color: "#68A063" }, // Node green
  { id: 4, name: "MongoDB", icon: SiMongodb, color: "#47A248" }, // Mongo green
  { id: 5, name: "MySQL", icon: SiMysql, color: "#00758F" }, // MySQL teal
  { id: 6, name: "REST API", icon: FaGlobe, color: "#facc15" }, // Yellow (generic API)
  { id: 7, name: "REST API", icon: FaGlobe, color: "#facc15" },
  { id: 8, name: "REST API", icon: FaGlobe, color: "#facc15" },
  { id: 9, name: "REST API", icon: FaGlobe, color: "#facc15" },
  { id: 10, name: "MySQL", icon: SiMysql, color: "#00758F" }, // MySQL teal
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
