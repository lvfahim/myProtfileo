import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const Contact = () => { 
    const titleRef = useRef(null);
    const formRef = useRef(null);

    useEffect(() => {
    
        if (titleRef.current) {
            gsap.set(titleRef.current, { y: -40, opacity: 0 });
        }
        if (formRef.current) {
            gsap.set(formRef.current, { y: 60, opacity: 0 });
        }
        if (titleRef.current) {
            gsap.to(titleRef.current, {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
            });
        }

        if (formRef.current) {
            gsap.to(formRef.current, {
                y: 0,
                opacity: 1,
                duration: 1.3,
                delay: 0.3,
                ease: "power3.out",
            });
        }
    }, []);

    return (
        <div className="relative min-h-screen px-6 lg:px-20 py-20 text-gray-200">

            <div className="absolute inset-0 -z-10">
                <div className="w-72 h-72 bg-[#7F00FF]/25 blur-[150px] rounded-full absolute top-10 left-10"></div>
                <div className="w-72 h-72 bg-[#00DBDE]/20 blur-[150px] rounded-full absolute bottom-20 right-10"></div>
            </div>

            <h1
                ref={titleRef}
                className="text-4xl lg:text-6xl font-bold text-center mb-16
                   bg-gradient-to-r from-[#7F00FF] to-[#E100FF]
                   text-transparent bg-clip-text"
            >
                Contact Me
            </h1>

            <motion.div
                ref={formRef}

                className="max-w-2xl mx-auto bg-[#0D0D0D]/50 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-xl"
            >

                <form className="space-y-6">
                    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                        <label className="text-lg font-medium">Your Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full mt-2 p-4 rounded-xl bg-[#101010] border border-[#7F00FF]/30
                         focus:border-[#E100FF] focus:outline-none text-gray-200"
                        />
                    </motion.div>


                    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                        <label className="text-lg font-medium">Email Address</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full mt-2 p-4 rounded-xl bg-[#101010] border border-[#7F00FF]/30
                         focus:border-[#E100FF] focus:outline-none text-gray-200"
                        />
                    </motion.div>


                    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                        <label className="text-lg font-medium">Message</label>
                        <textarea
                            rows="5"
                            placeholder="Write your message..."
                            className="w-full mt-2 p-4 rounded-xl bg-[#101010] border border-[#7F00FF]/30
                         focus:border-[#E100FF] focus:outline-none text-gray-200 resize-none"
                        ></textarea>
                    </motion.div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-[#7F00FF] to-[#E100FF]
                         text-white font-semibold text-lg shadow-lg hover:shadow-[#7F00FF]/40"
                    >
                        Send Message
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
};

export default Contact;