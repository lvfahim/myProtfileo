import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Motorion from '../assets/motorion.png'; 
import PlantLife from '../assets/plantLife.png'; 
import Hero from '../assets/hero.png';

// Framer Motion container variants for staggered animation
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // Delay between each project card's animation
        },
    },
};

// Framer Motion item variants for each project card
const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
};

const projectsData = [
    {
        name: "Motorio - Car Rental",
        description: "A trusted vehicle rental platform featuring cars, bikes, and yachts. Designed for fast and instant booking.",
        link: "https://startling-tiramisu-00ff96.netlify.app/",
        image: Motorion, 
        tags: ["React", "Mongodb", "Tailwind"],
    },
    {
        name: "Plant Life - Green Nest",
        description: "A modern platform focused on selling indoor plants to create healthy, calm, and beautiful home environments.",
        link: "https://astonishing-cat-18d66d.netlify.app/",
        image: PlantLife, 
        tags: ["React", "E-commerce", "TailWind"],
    },
    {
        name: "HERO.IO - Productive Apps",
        description: "A landing page for an organization that builds innovative, productive apps to make everyday life simpler and smarter.",
        link: "https://herooilv26320fahim44491.netlify.app/",
        image: Hero, 
        tags: ["React", "Landing Page", "Mobile"],
    },
];

const Project = () => {
    const titleRef = useRef(null);

    // GSAP Animation for the Title
    useEffect(() => {
        if (titleRef.current) {
            // Set initial state (Hidden)
            gsap.set(titleRef.current, { y: -50, opacity: 0 }); 
            
            // Animate to final state (Visible)
            gsap.to(titleRef.current, {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
            });
        }
    }, []);

    return (
        <div className="relative min-h-screen px-6 lg:px-20 py-20 text-gray-200">
            
            {/* Background Glows */}
            <div className="absolute inset-0 -z-10">
                <div className="w-72 h-72 bg-[#7F00FF]/25 blur-[150px] rounded-full absolute top-10 left-5"></div>
                <div className="w-72 h-72 bg-[#00DBDE]/20 blur-[150px] rounded-full absolute bottom-20 right-10"></div>
            </div>

            {/* Title - Animated by GSAP */}
            <h1
                ref={titleRef}
                className="text-4xl lg:text-6xl font-bold text-center mb-16 
                           bg-gradient-to-r from-[#7F00FF] to-[#E100FF]
                           text-transparent bg-clip-text"
            >
                My Featured Projects
            </h1>

            {/* Project Grid - Animated by Framer Motion Stagger */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto"
            >
                {projectsData.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ 
                            y: -5, 
                            scale: 1.02, 
                            boxShadow: "0 10px 20px rgba(127, 0, 255, 0.4)" 
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="bg-[#1a1a2e] p-5 rounded-xl border border-white/10 overflow-hidden shadow-lg"
                    >
                        {/* *** FIX 3: Actual Image Component *** */}
                        <div className="h-40 overflow-hidden rounded-lg mb-4">
                            <img
                                src={project.image} 
                                alt={project.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        {/* ********************************* */}
                        
                        <h2 className="text-2xl font-semibold text-[#00DBDE] mb-2">
                            {project.name}
                        </h2>

                        <p className="text-gray-400 mb-4">{project.description}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag, i) => (
                                <span key={i} className="px-3 py-1 text-xs font-medium text-[#7F00FF] bg-[#7F00FF]/20 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-5 py-2 rounded-lg bg-gradient-to-r from-[#7F00FF] to-[#E100FF] 
                                       text-white font-medium hover:opacity-90 transition-opacity"
                        >
                            View Live Project
                        </a>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Project;