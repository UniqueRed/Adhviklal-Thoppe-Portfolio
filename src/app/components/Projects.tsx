"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiVercel,
  SiSharp,
  SiUnity,
  SiSvelte,
  SiJavascript,
  SiPython,
  SiOpencv,
  SiMediapipe,
  SiDocker,
} from "react-icons/si";
import { DiHtml5, DiCss3 } from "react-icons/di";
import { FaAws } from "react-icons/fa";

type Framework = keyof typeof frameworkIcons;

const projects: {
  title: string;
  description: string;
  image: string;
  github?: string;
  live?: string;
  frameworks: Framework[];
}[] = [
  {
    title: "Wingman",
    description:
      "A comprehensive event management platform that centralizes active school events, making it easy for teachers to post and students to track and register for opportunities.",
    image: "/project1.jpg",
    frameworks: ["react", "postgresql", "nodejs", "express", "git", "aws", "docker"],
  },
  {
    title: "ML Hand Tracking",
    description:
      "A real-time hand tracking model built with Machine Learning and Computer Vision. The model recognizes gestures using landmark orientation, allowing users to identify a wide range of hand gestures.",
    image: "/project2.jpg",
    github: "https://github.com/UniqueRed/Hand-Tracking",
    frameworks: ["python", "opencv", "mediapipe", "git"],
  },
  {
    title: "Symplenote",
    description:
      "A minimalistic note-taking app focused on simplicity, speed, and ease of use. Featuring a clean, intuitive interface, it lets users quickly jot down ideas, tasks, or reminders without distractions.",
    image: "/project3.jpg",
    github: "https://github.com/UniqueRed/SymplenoteWeb",
    live: "https://symplenote-web.vercel.app",
    frameworks: ["html", "css", "js", "git"],
  },
  {
    title: "FlattCSV",
    description:
      "Flatten JSON columns from CSV's with ease. Upload your CSV and use our auto-detection software to detect JSON columns (or input them manually), then download your new flattened CSV.",
    image: "/project3.jpg",
    github: "https://github.com/UniqueRed/flattcsv",
    live: "https://flattcsv.vercel.app",
    frameworks: ["nextjs", "typescript", "nodejs", "git"],
  },
  {
    title: "Random Color Generator",
    description:
      "Flatten JSON columns from CSV's with ease. Upload your CSV and use our auto-detection software to detect JSON columns (or input them manually), then download your new flattened CSV.",
    image: "/project3.jpg",
    github: "https://github.com/UniqueRed/RandomColor",
    live: "https://minimalist-randomcolor.vercel.app",
    frameworks: ["html", "css", "js", "git"],
  },
];

const frameworkIcons = {
  react: SiReact,
  nextjs: SiNextdotjs,
  tailwindcss: SiTailwindcss,
  typescript: SiTypescript,
  nodejs: SiNodedotjs,
  express: SiExpress,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  github: Github,
  html: DiHtml5,
  css: DiCss3,
  js: SiJavascript,
  git: SiGit,
  aws: FaAws,
  vercel: SiVercel,
  csharp: SiSharp,
  unity: SiUnity,
  svelte: SiSvelte,
  python: SiPython,
  opencv: SiOpencv,
  mediapipe: SiMediapipe,
  docker: SiDocker,
};

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="group relative flex flex-col justify-between h-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg p-6 hover:shadow-[0px_0px_50px_10px_rgba(255,255,255,0.1)] transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400">{project.description}</p>
              </div>

              <div className="flex items-center space-x-4 mb-6 min-h-[24px]">
                {project.github ? (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Github className="h-5 w-5" />
                  </motion.a>
                ) : (
                  <div className="w-5 h-5"></div>
                )}
                {project.live ? (
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ExternalLink className="h-5 w-5" />
                  </motion.a>
                ) : (
                  <div className="w-5 h-5"></div>
                )}
              </div>

              <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t border-white/10">
                {project.frameworks.map((framework) => {
                  const Icon = frameworkIcons[framework];
                  return (
                    <motion.div
                      key={framework}
                      className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-full p-2 hover:border-white/20 transition-all duration-100 hover:scale-105"
                      transition={{ duration: 0.25 }}
                    >
                      {React.createElement(
                        Icon as React.ComponentType<{ className: string }>,
                        { className: "h-4 w-4 text-white" }
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
