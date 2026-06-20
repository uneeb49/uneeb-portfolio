'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import Preloader from '@/components/sections/Preloader';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Expertise from '@/components/sections/Expertise';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Services from '@/components/sections/Services';
import Skills from '@/components/sections/Skills';
import Achievements from '@/components/sections/Achievements';
import Education from '@/components/sections/Education';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative w-full overflow-hidden">
      <Preloader />
      <Hero />
      <About />
      <Expertise />
      <Experience />
      <Projects />
      <Services />
      <Skills />
      <Achievements />
      <Education />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
