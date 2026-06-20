'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ArrowRight, Download } from 'lucide-react';
import AnimatedButton from '@/components/ui/AnimatedButton';
import ParticleField from '@/components/effects/ParticleField';
import GridBackground from '@/components/effects/GridBackground';
import TextReveal from '@/components/effects/TextReveal';
import MouseTracker from '@/components/effects/MouseTracker';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentTitle, setCurrentTitle] = useState(0);
  const titleRef = useRef<HTMLDivElement>(null);

  const titles = [
    'IT Specialist',
    'AI Solutions Expert',
    'Digital Marketing Lead',
    'Production Director',
    'Event Management Professional',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (titleRef.current) {
      const tl = gsap.timeline();
      tl.to(titleRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        onComplete: () => {
          if (titleRef.current) {
            gsap.set(titleRef.current, { opacity: 0, y: 20 });
            gsap.to(titleRef.current, {
              opacity: 1,
              y: 0,
              duration: 0.5,
            });
          }
        },
      });
    }
  }, [currentTitle]);

  const stats = [
    { value: '8+', label: 'Years Experience' },
    { value: '100+', label: 'Projects' },
    { value: '50+', label: 'Brands Supported' },
    { value: '∞', label: 'Possibilities' },
  ];

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <GridBackground />
      <ParticleField />
      <MouseTracker />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Name */}
            <div>
              <motion.h1
                className="text-5xl md:text-7xl font-bold mb-4 glow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <TextReveal text="UNEEB UR" />
                <br />
                <span className="gradient-text">REHMAN</span>
              </motion.h1>
            </div>

            {/* Rotating Title */}
            <div className="h-16 md:h-20 flex items-center">
              <motion.div
                ref={titleRef}
                className="text-2xl md:text-4xl font-semibold gradient-text-cyan"
                key={currentTitle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                {titles[currentTitle]}
              </motion.div>
            </div>

            {/* Tagline */}
            <motion.p
              className="text-lg text-gray-300 leading-relaxed max-w-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Empowering Businesses Through Technology, AI, Digital Marketing, and Multimedia Innovation.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="glass p-4 rounded-lg text-center"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-400 mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <AnimatedButton
                href="#contact"
                className="btn-primary flex items-center gap-2"
              >
                Hire Me <ArrowRight size={20} />
              </AnimatedButton>
              <AnimatedButton
                href="#projects"
                className="btn-secondary flex items-center gap-2"
              >
                View Portfolio
              </AnimatedButton>
              <AnimatedButton
                href="#"
                className="btn-secondary flex items-center gap-2"
              >
                <Download size={20} /> CV
              </AnimatedButton>
            </motion.div>
          </motion.div>

          {/* Right - Character/Visual */}
          <motion.div
            className="relative h-96 md:h-full flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Glow Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-electric-blue/20 via-transparent to-violet/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* 3D Frame Container */}
            <motion.div
              className="relative w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden glass-dark"
              animate={{
                rotateX: [0, 5, -5, 0],
                rotateY: [0, -3, 3, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                perspective: '1000px',
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Placeholder for Character Image */}
              <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
                {/* Character/Avatar Image would go here */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-electric-blue/30 to-violet/30"
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />

                {/* Floating Elements Around Character */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-12 h-12 border-2 border-electric-blue/30 rounded-lg"
                    style={{
                      left: `${25 + i * 20}%`,
                      top: `${15 + (i % 2) * 60}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      rotate: [0, 360],
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                      duration: 4 + i,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                ))}

                {/* Center Badge */}
                <motion.div
                  className="relative z-10 text-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="text-4xl font-bold gradient-text">UNR</div>
                  <div className="text-xs text-electric-blue mt-2">Premium Portfolio</div>
                </motion.div>
              </div>

              {/* Border Glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-transparent"
                animate={{
                  borderColor: ['rgba(0, 217, 255, 0.2)', 'rgba(157, 0, 255, 0.4)', 'rgba(0, 217, 255, 0.2)'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2 text-electric-blue">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-electric-blue rounded-full flex justify-center p-2">
            <motion.div
              className="w-1 h-2 bg-electric-blue rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
