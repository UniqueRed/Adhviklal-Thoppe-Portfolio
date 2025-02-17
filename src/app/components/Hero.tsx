"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, BookOpen } from "lucide-react";
import MatrixRain from "./MatrixRain"; // Import the MatrixRain component

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Adhviklal Thoppe";
  const typingSpeed = 100;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <MatrixRain />

      <div className="text-center relative z-10">
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400"
          style={{
            textShadow:
              "0 0 10px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 255, 255, 0.5), 0 0 30px rgba(255, 255, 255, 0.1)",
          }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          {displayedText}
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-400 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          Innovative, Hardworking, Unique
        </motion.p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
          <motion.a
            href="https://github.com/UniqueRed"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full p-6 hover:shadow-[0px_0px_50px_15px_rgba(255,255,255,0.1)] transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <Github className="h-5 w-5 mr-2" />
            <span>GitHub</span>
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/adhviklal-thoppe"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full p-6 hover:shadow-[0px_0px_50px_15px_rgba(255,255,255,0.1)] transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <Linkedin className="h-5 w-5 mr-2" />
            <span>LinkedIn</span>
          </motion.a>
          <motion.a
            href="https://medium.com/@adhviklal.thoppe"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full p-6 hover:shadow-[0px_0px_50px_15px_rgba(255,255,255,0.1)] transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <BookOpen className="h-5 w-5 mr-2" />
            <span>Medium</span>
          </motion.a>
        </div>
        <motion.a
          href="#projects"
          className="inline-flex items-center px-8 py-3 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full p-6 hover:shadow-[0px_0px_50px_15px_rgba(255,255,255,0.1)] transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          View Projects
          <ArrowRight className="ml-2 h-4 w-4" />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
