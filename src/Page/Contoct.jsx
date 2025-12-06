import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedinIn, FaFacebookF, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact = () => { 
   
    const titleRef = useRef(null);
    const contactDetailsRef = useRef(null);
    const formRef = useRef(null);

    const contactInfo = [
        { icon: FaPhoneAlt, label: "Phone", value: "+8801315345166" }, 
        { icon: FaEnvelope, label: "Email", value: "mdfahim26320@gmail.com" }, 
        { icon: FaMapMarkerAlt, label: "Location", value: "Rajshahi, Bangladesh" }, 
    ];

    const socialLinks = [
        { icon: FaLinkedinIn, link: "https://www.linkedin.com/in/md-fahim-numan/" }, 
        { icon: FaFacebookF, link: "https://www.facebook.com/lv.fahim.78750" },  
        { icon: FaGithub, link: "https://github.com/lvfahim" },     
       
    ];

    useEffect(() => {
     
        gsap.set(titleRef.current, { y: -40, opacity: 0 });
        gsap.set(contactDetailsRef.current, { x: -40, opacity: 0 }); 
        gsap.set(formRef.current, { y: 60, opacity: 0 });

      
        gsap.to(titleRef.current, {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
        });

        gsap.to(contactDetailsRef.current, { 
            x: 0,
            opacity: 1,
            duration: 1.2,
            delay: 0.3, 
            ease: "power3.out",
        });

        gsap.to(formRef.current, {
            y: 0,
            opacity: 1,
            duration: 1.3,
            delay: 0.6, 
            ease: "power3.out",
        });
    }, []);

    const ContactDetails = () => (
        <div ref={contactDetailsRef} className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            
            <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white mb-4 
                               bg-gradient-to-r from-[#00DBDE] to-[#7F00FF] 
                               text-transparent bg-clip-text">
                    Get in Touch
                </h2>
                {contactInfo.map((item, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.03, boxShadow: "0 0 15px rgba(127, 0, 255, 0.4)" }}
                        className="bg-[#101010] p-6 rounded-xl border border-[#7F00FF]/30 transition duration-300 flex items-center space-x-4"
                    >
                        <item.icon className="text-2xl text-[#7F00FF] min-w-[2rem]" />
                        <div>
                            <p className="text-sm text-gray-400 font-medium">{item.label}</p>
                            <p className="text-lg font-semibold text-white">{item.value}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            
            <div className="flex flex-col justify-center items-start lg:items-center">
                <h2 className="text-3xl font-bold text-white mb-6 mt-6 lg:mt-0 
                               bg-gradient-to-r from-[#E100FF] to-[#00DBDE] 
                               text-transparent bg-clip-text">
                    Connect With Me
                </h2>
                <div className="flex space-x-6">
                    {socialLinks.map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, y: -5 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-white text-3xl p-3 rounded-full bg-[#101010] border border-[#00DBDE]/30 
                                       shadow-lg hover:text-[#00DBDE] transition duration-300"
                        >
                            <item.icon />
                        </motion.a>
                    ))}
                </div>
                <p className="mt-4 text-sm text-gray-500">I respond quickly on LinkedIn and Email.</p>
            </div>
        </div>
    );

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
            
     
            <ContactDetails />
            <h1
                ref={titleRef}
                className="text-4xl lg:text-6xl font-bold text-center mb-16
                   bg-gradient-to-r from-[#7F00FF] to-[#E100FF]
                   text-transparent bg-clip-text"
            >
                Send Message
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