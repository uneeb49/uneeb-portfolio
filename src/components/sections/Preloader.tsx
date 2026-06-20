'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const Preloader = () => {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to('.preloader', {
      opacity: 1,
      duration: 0.5,
    })
      .to('.preloader-progress', {
        width: '100%',
        duration: 2.5,
        ease: 'power1.inOut',
      })
      .to(
        '.preloader-text',
        {
          opacity: 0,
          duration: 0.5,
        },
        '-=0.3'
      )
      .to(
        '.preloader',
        {
          opacity: 0,
          duration: 0.8,
          onComplete: () => setIsComplete(true),
        }
      );
  }, []);

  if (isComplete) return null;

  return (
    <div
      className="preloader fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-dark pointer-events-none opacity-0"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-violet/5 to-transparent"
          animate={{ y: [0, 100, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Particle Effect */}
        <div className="absolute inset-0 w-32 h-32 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-electric-blue rounded-full"
              style={{
                left: `${Math.cos((i / 12) * Math.PI * 2) * 50}px`,
                top: `${Math.sin((i / 12) * Math.PI * 2) * 50}px`,
              }}
              animate={{
                left: `${Math.cos((i / 12) * Math.PI * 2) * 80}px`,
                top: `${Math.sin((i / 12) * Math.PI * 2) * 80}px`,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: (i / 12) * 0.5,
              }}
            />
          ))}
        </div>

        {/* Main Text */}
        <h1 className="preloader-text text-4xl md:text-5xl font-bold gradient-text mb-4 opacity-100">
          UNEEB UR REHMAN
        </h1>

        {/* Loading Steps */}
        <div className="preloader-text space-y-2 mb-12 text-sm md:text-base opacity-100">
          <motion.p
            className="text-electric-blue"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Loading AI Systems...
          </motion.p>
          <motion.p
            className="text-violet"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
          >
            Initializing Portfolio...
          </motion.p>
          <motion.p
            className="text-neon-cyan"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
          >
            Preparing Experience...
          </motion.p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-dark-navy rounded-full overflow-hidden">
          <motion.div
            className="preloader-progress h-full bg-gradient-to-r from-electric-blue to-violet"
            initial={{ width: 0 }}
            style={{ boxShadow: '0 0 20px rgba(0, 217, 255, 0.6)' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
