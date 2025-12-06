import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const Resume = () => {
  const titleRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    if (titleRef.current) {
        gsap.set(titleRef.current, { y: -50, opacity: 0 });
    }
    if (cardRef.current) {
        gsap.set(cardRef.current, { scale: 0.7, opacity: 0 });
    }
    if (titleRef.current) {
        gsap.to(titleRef.current, {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
        });
    }

    if (cardRef.current) {
        gsap.to(cardRef.current, {
            scale: 1,
            opacity: 1,
            duration: 1.3,
            delay: 0.5,
            ease: "back.out(1.7)",
        });
    }
  }, []);

  return (
    <div className="pt-28 pb-52 
     text-white flex flex-col items-center py-14 px-5">
      
     <title>Resume</title>
      <h1 
        ref={titleRef}
        className="text-4xl lg:text-5xl mb-4 font-bold text-center 
                   bg-gradient-to-r from-[#7F00FF] to-[#E100FF]
                   text-transparent bg-clip-text"
      >
        My Animated Resume Section
      </h1>

      
      <motion.div
        ref={cardRef}
        className="bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-2xl"
      >
        <h2 className="text-2xl font-semibold text-yellow-400 mb-3">
          MD FAHIM — Developer Resume
        </h2>

        <p className="text-gray-300 mb-5">
          Below are my latest updated resume links for Frontend, Backend,
          and Full-Stack development. Click to view or download.
        </p>

        <div className="space-y-5">
         
          <motion.a
            whileHover={{ scale: 1.05 }}
            target="_blank"
            href="https://drive.google.com/file/d/1zRBVdWt9RxWp44m8YCuFStn0Va8cePUP/view?usp=sharing"
            className="block bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg font-medium"
          >
            🌐 Frontend Developer Resume
          </motion.a>

          
          <motion.a
            whileHover={{ scale: 1.05 }}
            target="_blank"
            href="https://drive.google.com/file/d/1g3--UFycnj_aiveyVPROGVokxjTQuYR8/view?usp=sharing"
            className="block bg-green-600 hover:bg-green-700 px-5 py-3 rounded-lg font-medium"
          >
            💾 Backend Developer Resume
          </motion.a>

        
          <motion.a
            whileHover={{ scale: 1.05 }}
            target="_blank"
            href="https://drive.google.com/file/d/1btbbhiUunPFcrpJnrxBZb2ayxcV_6lK_/view?usp=sharing"
            className="block bg-purple-600 hover:bg-purple-700 px-5 py-3 rounded-lg font-medium"
          >
            🖥️ Full-Stack Developer Resume
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Resume;