import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Img from "../assets/a.jpg";

const About = () => {
    const imgRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        gsap.set(imgRef.current, { x: -80, opacity: 0 });
        gsap.set(textRef.current, { x: 80, opacity: 0 });

        
        gsap.to(imgRef.current, {
            x: 0, 
            opacity: 1,
            duration: 1.2,
            delay: 0.2,
            ease: "power3.out",
        });

       
        gsap.to(textRef.current, {
            x: 0, 
            opacity: 1, 
            duration: 1.2,
            delay: 0.4,
            ease: "power3.out",
        });
    }, []);

    return (
        <div className="relative  px-6 lg:px-20 pt-28 pb-52 text-gray-200">

          <title>About Me</title>
            <div className="absolute inset-0 -z-10">
                <div className="w-72 h-72 bg-[#7F00FF]/25 blur-[150px] rounded-full absolute top-10 left-5"></div>
                <div className="w-72 h-72 bg-[#00DBDE]/20 blur-[150px] rounded-full absolute bottom-20 right-10"></div>
            </div>

         
            <h1 className="text-4xl lg:text-6xl font-bold text-center mb-16
                     bg-gradient-to-r from-[#7F00FF] to-[#E100FF]
                     text-transparent bg-clip-text">
                About Me
            </h1>

          
            <div className="flex flex-col lg:ml-28 lg:flex-row items-center gap-12 lg:gap-20">

                
                <motion.div
                    ref={imgRef}
                    initial={{ opacity: 1 }} 
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="w-60 h-60 rounded-full overflow-hidden shadow-xl border-4 border-[#7F00FF]/40"
                >
                    <img
                        src={Img}
                        alt="profile"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

              
                <motion.div
                    ref={textRef}
                    initial={{ opacity: 1 }} 
                    className="max-w-xl"
                >
                    <p className="text-lg leading-8 text-gray-300">
                        Hi, I'm <span className="text-[#03E1FF] font-semibold">MD FAHIM </span>,
                        a passionate and dedicated web developer
                        I enjoy building interactive, user-friendly applications using modern
                        technologies like <span className="text-[#FF6FD8]">React</span>,
                        <span className="text-[#03E1FF]">Tailwind</span>, and 
                        <span className="text-[#7F00FF]"> Next.js</span>.
                        <br /> <br />
                        I love solving problems, exploring new ideas, and creating meaningful
                        digital experiences. My goal is to become a complete full-stack
                        developer and build applications that help people.
                    </p>

                  
                    <motion.div
                        className="flex gap-5 mt-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                    >
                        <a
                            href="https://www.linkedin.com/in/md-fahim-numan/"
                            target="_blank"
                            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#7F00FF] to-[#E100FF]
                         text-white font-semibold shadow-lg hover:shadow-[#7F00FF]/40 transition"
                        >
                            LinkedIn
                        </a>

                        <a
                            href="https://github.com/lvfahim"
                            target="_blank"
                            className="px-6 py-3 rounded-xl bg-[#0E1117] border border-[#7F00FF]/40
                         hover:bg-[#1A1A2E] transition font-semibold"
                        >
                            GitHub
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
