import React, { useEffect, useRef, useState } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import { motion, useAnimation, useInView } from 'framer-motion';
import profileImage from "../../assets/ProfilePhoto.jpeg";

const About = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  // Detect if device is mobile (screen width <= 768px)
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32 relative overflow-hidden"
      ref={ref}
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #fb923c, transparent 70%)',
            filter: 'blur(20px)'
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-orange-400 rounded-full opacity-30"
            style={{
              left: `${30 + i * 20}%`,
              top: `${40 + i * 5}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3
            }}
          />
        ))}
      </div>

      <motion.div
        className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-16"
        initial={{ opacity: 0 }}
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
        }}
      >
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
            }}
            style={{ textShadow: '0 5px 15px rgba(251, 146, 60, 0.3)' }}
          >
            <motion.span className="inline-block" whileHover={{ scale: 1.1, color: '#fb923c' }}>Hi,</motion.span>{" "}
            <motion.span className="inline-block" whileHover={{ scale: 1.1, color: '#fb923c' }}>I</motion.span>{" "}
            <motion.span className="inline-block" whileHover={{ scale: 1.1, color: '#fb923c' }}>am</motion.span>
          </motion.h1>

          {/* Name with gradient */}
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight relative"
            variants={{
              hidden: { opacity: 0, scale: 0.3, y: 80 },
              visible: { 
                opacity: 1, 
                scale: 1, 
                y: 0, 
                transition: { duration: 1.2, type: "spring", stiffness: 100 }
              }
            }}
            whileHover={{
              scale: 1.05,
              textShadow: '0 0 20px rgba(251, 146, 60, 0.8)',
            }}
            style={{ textShadow: '0 5px 25px rgba(251, 146, 60, 0.4)' }}
          >
            <motion.span
              className="relative inline-block"
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              style={{
                background: 'linear-gradient(90deg, #ffffff, #fb923c, #ffffff)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
             Satyam Shukla
            </motion.span>
          </motion.h2>

          {/* Skills with typing effect */}
          <motion.h3
            className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.8 } }
            }}
          >
            <span className="text-white">I am a </span>
            <motion.span
              className="relative inline-block text-orange-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <ReactTypingEffect
                text={['Coder', 'Frontend Developer', 'Backend Developer']}
                speed={100}
                eraseSpeed={50}
                typingDelay={500}
                eraseDelay={2000}
                cursorRenderer={(cursor) => (
                  <motion.span 
                    className="text-orange-500"
                    animate={{ 
                      opacity: [1, 0, 1],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 1, repeat: Infinity }}
                    style={{ textShadow: '0 0 10px #fb923c' }}
                  >
                    {cursor}
                  </motion.span>
                )}
              />
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ 
                  width: "100%", 
                  boxShadow: ['0 0 5px #fb923c', '0 0 15px #fb923c']
                }}
                transition={{ 
                  width: { duration: 0.8, delay: 1.5 },
                  boxShadow: { duration: 2, repeat: Infinity }
                }}
              />
            </motion.span>
          </motion.h3>

          {/* About paragraph */}
          <motion.p
            className="text-base sm:text-lg md:text-lg text-gray-300 mb-10 mt-8 leading-relaxed"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
            }}
            whileHover={{ color: '#e5e7eb' }}
          >
            Goal-oriented engineering student with a solid foundation in Data Structures and Algorithms (DSA) and practical
            experience in web development. Passionate about crafting scalable, efficient solutions and eager to contribute to
            impactful projects within a dynamic and collaborative team environment.
          </motion.p>

          {/* Resume Button */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.8 },
              visible: { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: { duration: 0.8, delay: 1, type: "spring", stiffness: 200 }
              }
            }}
          >
            <motion.a
              href="https://drive.google.com/file/d/1ZAyIy9Dk6JxNllo9-qA-1p6s8ghHTG8L/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white py-4 px-10 rounded-full mt-5 text-lg font-bold relative overflow-hidden group cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #fb923c, #f59e42, #fb923c)',
                backgroundSize: '200% 200%',
                boxShadow: '0 8px 32px rgba(251, 146, 60, 0.4)',
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 12px 40px rgba(251, 146, 60, 0.6)',
                backgroundPosition: '100% 100%',
              }}
              whileTap={{ scale: 0.95 }}
              animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }}
              transition={{
                backgroundPosition: { duration: 4, repeat: Infinity, ease: "linear" }
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                DOWNLOAD RESUME
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ x: 3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </motion.svg>
              </span>
              <motion.div
                className="absolute inset-0 bg-white rounded-full opacity-0"
                whileHover={{
                  scale: [0, 1.5],
                  opacity: [0, 0.1, 0],
                  transition: { duration: 0.6 }
                }}
              />
            </motion.a>
          </motion.div>
        </div>

        {/* Right Side - Image with better spacing */}
        <motion.div
          className="md:w-1/2 flex justify-center md:justify-end"
          variants={{
            hidden: { opacity: 0, scale: 0.5, rotate: -180, x: 150 },
            visible: { 
              opacity: 1, 
              scale: 1, 
              rotate: 0, 
              x: 0,
              transition: { duration: 1.4, type: "spring", stiffness: 80 }
            }
          }}
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.02 }}
          >
            {/* Animated rings */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-orange-400 opacity-30"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
                rotate: [0, 360]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              style={{ filter: 'blur(1px)' }}
            />

            <Tilt
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-orange-500 rounded-full relative z-10"
              tiltMaxAngleX={25}
              tiltMaxAngleY={25}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={!isMobile} // <--- disables gyroscope on mobile, keeps touch tilt
              style={{
                boxShadow: '0 20px 60px rgba(251, 146, 60, 0.3), inset 0 0 0 1px rgba(251, 146, 60, 0.2)'
              }}
            >
              <motion.img
                src={profileImage}
                alt="Pawan Pandey"
                className="w-full h-full rounded-full object-cover"
                style={{
                  filter: 'brightness(1.05) contrast(1.1) saturate(1.1)',
                  boxShadow: 'inset 0 0 100px rgba(251, 146, 60, 0.1)'
                }}
                whileHover={{
                  filter: 'brightness(1.15) contrast(1.15) saturate(1.2)',
                }}
              />
            </Tilt>
            {/* Floating elements */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-orange-400 rounded-full opacity-60"
                style={{
                  left: `${50 + 35 * Math.cos(i * Math.PI / 3)}%`,
                  top: `${50 + 35 * Math.sin(i * Math.PI / 3)}%`,
                }}
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 2 + i * 0.2,
                  repeat: Infinity,
                  delay: i * 0.1
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
