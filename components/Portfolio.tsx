"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import ProjectCard, { type Project } from "./ui/ProjectCard";

const categories = ["All", "Web App", "Mobile"];

const projects: Project[] = [
  {
    title: "FinTrack Pro",
    description:
      "Real-time financial analytics dashboard for institutional investors with live market data feeds and portfolio tracking.",
    category: "Web App",
    tech: ["Next.js", "Python", "PostgreSQL", "AWS"],
    metric: "$2.5M",
    metricLabel: "Processed daily",
    mockup: "dashboard",
  },
  {
    title: "MediConnect",
    description:
      "HIPAA-compliant telehealth platform connecting patients with healthcare providers via secure video consultations.",
    category: "Mobile",
    tech: ["React Native", "Node.js", "MongoDB", "WebRTC"],
    metric: "50K+",
    metricLabel: "Consultations",
    mockup: "mobile",
  },
  {
    title: "PayFlow",
    description:
      "Cross-border payment processing platform enabling fast, secure transactions across African markets.",
    category: "Mobile",
    tech: ["React Native", "Rust", "PostgreSQL", "Stripe"],
    metric: "15",
    metricLabel: "Countries supported",
    mockup: "chart",
  },
  {
    title: "LearnPath",
    description:
      "Adaptive learning platform with AI-driven curriculum personalization and progress tracking for online education.",
    category: "Web App",
    tech: ["Next.js", "Django", "PyTorch", "Redis"],
    metric: "200K",
    metricLabel: "Active learners",
    mockup: "dashboard",
  },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Our Work"
          subtitle="Products we've built, scaled, and shipped."
        />

        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-primary text-gray-900"
                  : "text-gray-500 hover:text-gray-900 border border-gray-200 hover:border-gray-300 bg-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                delay={i * 0.08}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
