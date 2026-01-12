import React from 'react';
import { motion } from 'framer-motion';
import { RiReactjsLine, RiNextjsFill, RiJavascriptFill } from "react-icons/ri";
import pdf from '../assets/MD FAHIM Full-Stack Developer Resume.pdf';
import Img from '../assets/fahim.phg.jpg';

const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    },
};

const bannerVariants = {
    animate: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.5,
        },
    },
};

const textVariants = {
    initial: { y: 20, opacity: 0 },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20
        }
    },
};

const Home = () => {
    const expertiseSkills = ["JavaScript", "ES6", "React.js", "Firebase", "Tailwind", "Html5", "Css5"];
    const softSkills = ["Time Management", "Communication"];
    const name = "MD FAHIM";
    const role = "Full-Stack Developer";
    const tagline = "Building interactive and beautiful web experiences.";

    return (
        <div className="min-h-screen text-white flex flex-col items-center justify-center pt-20 pb-10 px-6 lg:px-20 overflow-hidden relative">
            
            {/* Background Glow Elements */}
            <div className="absolute inset-0 -z-10 opacity-70">
                <div className="w-96 h-96 bg-[#7F00FF]/20 blur-[180px] rounded-full absolute top-10 left-5"></div>
                <div className="w-96 h-96 bg-[#00DBDE]/20 blur-[180px] rounded-full absolute bottom-20 right-10"></div>
            </div>

            {/* --- Hero Section (Text Left, Image Right) --- */}
            <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12 mb-20">
                
                {/* Left side: Text */}
                <motion.div
                    variants={bannerVariants}
                    initial="initial"
                    animate="animate"
                    className="flex-1 text-left z-10"
                >
                    <motion.h4 variants={textVariants} className="text-xl md:text-2xl font-medium text-gray-400 mb-2">
                        👋 Hello, I'm
                    </motion.h4>

                    <motion.h1
                        variants={textVariants}
                        className="text-6xl sm:text-7xl lg:text-8xl font-extrabold mb-4 
                               bg-gradient-to-r from-[#7F00FF] to-[#E100FF]
                               text-transparent bg-clip-text leading-tight"
                    >
                        {name}
                    </motion.h1>

                    <motion.h2 variants={textVariants} className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-[#00DBDE]">
                        {role}
                    </motion.h2>

                    <motion.p variants={textVariants} className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
                        {tagline}
                    </motion.p>

                    <motion.div className="flex justify-start space-x-6">
                        <a href="/contact" className="px-8 py-3 rounded-full font-semibold text-lg bg-gradient-to-r from-[#7F00FF] to-[#E100FF] text-white shadow-lg hover:shadow-[#7F00FF]/50 transition duration-300">
                            Hire Me
                        </a>
                        <a href={pdf} download="MD_FAHIM_Resume.pdf" className="px-8 py-3 rounded-full font-semibold text-lg bg-gray-800 text-[#00DBDE] border border-[#00DBDE]/50 hover:bg-gray-700 transition duration-300">
                            Download Resume
                        </a>
                    </motion.div>
                </motion.div>

                {/* Right side: Image with Orbiting Icons */}
                <div className="flex-1 relative flex justify-center items-center">
                    
                    {/* Floating & Orbiting Icons */}
                    <motion.div 
                        animate={{ rotate: 360 }} 
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }} 
                        className="absolute text-6xl text-[#61DAFB] opacity-50 top-0 right-10 z-20"
                    >
                        <RiReactjsLine />
                    </motion.div>
                    
                    <motion.div 
                        animate={{ y: [0, -30, 0], x: [0, 10, 0] }} 
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} 
                        className="absolute text-5xl text-[#F7DF1E] opacity-50 bottom-10 left-5 z-20"
                    >
                        <RiJavascriptFill />
                    </motion.div>

                    <motion.div 
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }} 
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} 
                        className="absolute text-5xl text-white top-1/2 -left-10 z-20 hidden lg:block"
                    >
                        <RiNextjsFill />
                    </motion.div>

                    {/* Image Container with Glow */}
                    <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }} 
                        animate={{ scale: 1, opacity: 1 }} 
                        transition={{ duration: 1 }} 
                        className="relative w-72 h-72 lg:w-[450px] lg:h-[450px]"
                    >
                        {/* Soft background glow behind image */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#7F00FF]/40 to-[#00DBDE]/40 rounded-full blur-[80px]"></div>
                        
                        <div className="w-full h-full rounded-full border-[10px] border-[#1a1a2e] overflow-hidden shadow-2xl relative z-10 group">
                            <img 
                                src={Img} 
                                alt="Fahim" 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                            />
                            
                            {/* MERN STACK Badge (Maisha Style) */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#020617]/90 backdrop-blur-md px-5 py-1.5 border border-[#00DBDE]/30 rounded-full">
                                <span className="text-[10px] font-bold tracking-[0.2em] text-[#00DBDE] uppercase whitespace-nowrap">
                                    MERN STACK DEVELOPER
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* --- কার্ড সেকশন (আপনার অরিজিনাল কোড) --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto w-full">
                
                {/* কার্ড ১: Technical Expertise */}
                <motion.div
                    variants={cardVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.2 }}
                    className="bg-[#1a1a2e] p-8 rounded-2xl border-t-4 border-[#7F00FF] shadow-xl hover:shadow-[#7F00FF]/50 transition-shadow duration-300"
                >
                    <h2 className="text-3xl font-bold mb-6 text-[#00DBDE]">
                        🛠️ Technical Expertise
                    </h2>
                    <div className="flex flex-wrap gap-4">
                        {expertiseSkills.map((skill, index) => (
                            <motion.span
                                key={index}
                                whileHover={{ scale: 1.1, backgroundColor: '#7F00FF' }}
                                className="px-5 py-2 rounded-full bg-[#36004d] text-white font-medium shadow-md cursor-default"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>

                {/* কার্ড ২: Soft Skills & Tools (আপনার অরিজিনাল কোড) */}
                <motion.div
                    variants={cardVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.2 }}
                    className="bg-[#1a1a2e] p-8 rounded-2xl border-t-4 border-[#E100FF] shadow-xl hover:shadow-[#E100FF]/50 transition-shadow duration-300"
                >
                    <h2 className="text-3xl font-bold mb-6 text-[#FF6FD8]">
                        🧠 Soft Skills & Tools
                    </h2>
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-gray-300">Soft Skills:</h3>
                        <div className="flex flex-wrap gap-4">
                            {softSkills.map((skill, index) => (
                                <motion.span
                                    key={index}
                                    whileHover={{ scale: 1.1, backgroundColor: '#E100FF' }}
                                    className="px-5 py-2 rounded-full bg-[#4d0039] text-white font-medium cursor-default"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>

                        <h3 className="text-xl font-semibold text-gray-300 pt-3">Familiar Tools:</h3>
                        <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                            <span>GitHub,</span>
                            <span>npm,</span>
                            <span>VS Code,</span>
                            <span>Netlify,</span>
                            <span>Vercel</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;