"use client";

import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiPython,
  SiHtml5,
  SiCss3,
  SiWordpress,
  SiUnity,
  SiSvelte,
  SiTailwindcss,
  SiEclipseide,
  SiVercel,
  SiFirebase,
  SiFigma,
  SiSupabase,
  SiPandas,
  SiNumpy,
  SiOpencv,
  SiMediapipe,
  SiOllama,
} from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa";
import { MdCode } from "react-icons/md";
import { DiVisualstudio } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import React from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "Java", icon: FaJava },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "C#", icon: TbBrandCSharp },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "WordPress", icon: SiWordpress },
      { name: "Unity", icon: SiUnity },
      { name: "SvelteKit", icon: SiSvelte },
      { name: "TailwindCSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Developer Tools",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "Docker", icon: SiDocker },
      { name: "AWS", icon: FaAws },
      { name: "VS Code", icon: DiVisualstudio },
      { name: "Eclipse", icon: SiEclipseide },
      { name: "Vercel", icon: SiVercel },
      { name: "Firebase", icon: SiFirebase },
      { name: "Figma", icon: SiFigma },
      { name: "Supabase", icon: SiSupabase },
    ],
  },
  {
    title: "Libraries",
    skills: [
      { name: "Pandas", icon: SiPandas },
      { name: "NumPy", icon: SiNumpy },
      { name: "MatPlotLib", icon: MdCode },
      { name: "OpenCV", icon: SiOpencv },
      { name: "Ollama", icon: SiOllama },
      { name: "Groq", icon: MdCode },
      { name: "Mediapipe", icon: SiMediapipe },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-12">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-2xl font-bold mb-6 text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Skills
        </motion.h2>
        <div className="space-y-6">
          {skillCategories.map((category, index) => (
            <div key={category.title}>
              <motion.h3
                className="text-md font-semibold mb-3 text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: index * 0.1 }}
              >
                {category.title}
              </motion.h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg p-2 hover:shadow-[0px_0px_50px_15px_rgba(255,255,255,0.1)] transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.25,
                      ease: [0.25, 0.1, 0.25, 1],
                      delay: skillIndex * 0.05,
                    }}
                  >
                    <div className="flex flex-col items-center cursor-default">
                      {React.createElement(
                        skill.icon as React.ComponentType<{
                          className: string;
                        }>,
                        { className: "h-5 w-5 text-white" }
                      )}
                      <span className="text-xs font-medium text-white mt-1 text-center">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
