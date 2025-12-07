import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillsData = {
  frontend: [
    { name: "HTML5", percent: 95 },
    { name: "CSS3", percent: 90 },
    { name: "JavaScript", percent: 85 },
    { name: "React.js", percent: 88 },
    { name: "TailwindCSS", percent: 92 },
  ],

  backend: [
    { name: "Node.js", percent: 82 },
    { name: "Express.js", percent: 80 },
    { name: "MongoDB", percent: 78 },
    { name: "REST API", percent: 85 },
    { name: "Firebase", percent: 75 },
  ],

  tools: [
    { name: "Git", percent: 88 },
    { name: "GitHub", percent: 90 },
    { name: "VS Code", percent: 95 },
    { name: "Postman", percent: 82 },
    { name: "Figma", percent: 80 },
  ],
};

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(".skill-card");

    gsap.from(cards, {
      opacity: 1,           // FIX: বর্বর ডার্ক হওয়া বন্ধ
      y: 60,
      duration: 1.2,
      delay: 0.2,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 95%",
      },
    });
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-8/12 mx-auto py-20 px-5  text-white"
    >
      {/* ===== TITLE ===== */}
      <h2 className="text-4xl font-bold mb-12 border-l-4 pl-4 border-red-500">
        Frontend Development
      </h2>

      {/* ===== FRONTEND CARDS ===== */}
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 mb-20">
        {skillsData.frontend.map((skill, i) => (
          <motion.div
            key={i}
            className="skill-card 
            bg-[#1E2A48]/80 
            backdrop-blur-md 
            p-6 rounded-2xl shadow-xl 
            border border-white/10 text-center"
            whileHover={{ scale: 1.06 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h3 className="text-xl font-semibold mb-3">{skill.name}</h3>
            <p className="text-sm mb-1 opacity-80">Proficiency</p>

            <div className="w-full bg-gray-700/40 h-2 rounded-full">
              <div
                className="h-2 rounded-full bg-red-400"
                style={{ width: `${skill.percent}%` }}
              ></div>
            </div>

            <p className="mt-2 text-sm opacity-80">{skill.percent}%</p>
          </motion.div>
        ))}
      </div>

      {/* ===== BACKEND ===== */}
      <h2 className="text-4xl font-bold mb-12 border-l-4 pl-4 border-red-500">
        Backend Development
      </h2>

      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 mb-20">
        {skillsData.backend.map((skill, i) => (
          <motion.div
            key={i}
            className="skill-card 
            bg-[#1E2A48]/80 
            backdrop-blur-md 
            p-6 rounded-2xl shadow-xl 
            border border-white/10 text-center"
            whileHover={{ scale: 1.06 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h3 className="text-xl font-semibold mb-3">{skill.name}</h3>
            <p className="text-sm mb-1 opacity-80">Proficiency</p>

            <div className="w-full bg-gray-700/40 h-2 rounded-full">
              <div
                className="h-2 rounded-full bg-blue-400"
                style={{ width: `${skill.percent}%` }}
              ></div>
            </div>

            <p className="mt-2 text-sm opacity-80">{skill.percent}%</p>
          </motion.div>
        ))}
      </div>

      {/* ===== TOOLS ===== */}
      <h2 className="text-4xl font-bold mb-12 border-l-4 pl-4 border-red-500">
        Tools & Others
      </h2>

      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
        {skillsData.tools.map((skill, i) => (
          <motion.div
            key={i}
            className="skill-card 
            bg-[#1E2A48]/80 
            backdrop-blur-md 
            p-6 rounded-2xl shadow-xl 
            border border-white/10 text-center"
            whileHover={{ scale: 1.06 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h3 className="text-xl font-semibold mb-3">{skill.name}</h3>
            <p className="text-sm mb-1 opacity-80">Proficiency</p>

            <div className="w-full bg-gray-700/40 h-2 rounded-full">
              <div
                className="h-2 rounded-full bg-orange-400"
                style={{ width: `${skill.percent}%` }}
              ></div>
            </div>

            <p className="mt-2 text-sm opacity-80">{skill.percent}%</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
