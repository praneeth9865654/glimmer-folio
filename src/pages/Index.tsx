import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import InfiniteJourney from '@/components/InfiniteJourney';
import TechStack from '@/components/TechStack';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Site-wide parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 0.3, 0.1]);

  return (
    <div ref={containerRef} className="min-h-screen bg-background relative overflow-hidden">
      {/* Site-wide parallax background */}
      <motion.div
        style={{ y: backgroundY, opacity: backgroundOpacity }}
        className="fixed inset-0 bg-gradient-radial from-primary/5 via-transparent to-accent/5 pointer-events-none -z-10"
      />
      
      <Navigation />
      <main className="relative">
        <section id="hero">
          <Hero />
        </section>
        
        <motion.section 
          id="about"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <About />
        </motion.section>
        
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <InfiniteJourney />
        </motion.section>
        
        <motion.section 
          id="skills"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <TechStack />
        </motion.section>
        
        <motion.section 
          id="experience"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <Experience />
        </motion.section>
        
        <motion.section 
          id="projects"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <Projects />
        </motion.section>
        
        <motion.section 
          id="contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <Contact />
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
