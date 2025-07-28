import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Scene3D from './Scene3D';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Heavy parallax transforms for different layers
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const particlesY = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const particlesOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // GSAP heavy animations on mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating particles animation
      gsap.to('.floating-particle', {
        y: 'random(-100, 100)',
        x: 'random(-50, 50)',
        rotation: 'random(0, 360)',
        duration: 'random(4, 8)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.2
      });

      // Background pulse animation
      gsap.to('.bg-pulse', {
        scale: 1.1,
        opacity: 0.8,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut'
      });

      // Text reveal animations
      gsap.fromTo('.hero-reveal', 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: 'power3.out' }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // Create a dummy resume download
    const link = document.createElement('a');
    link.href = '#'; // In real app, this would be the actual resume URL
    link.download = 'Alex-Johnson-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Heavy Parallax Background Layers */}
      <motion.div
        ref={backgroundRef}
        style={{ y: backgroundY, scale: backgroundScale }}
        className="absolute inset-0 bg-gradient-radial from-primary/20 via-primary/5 to-transparent bg-pulse"
      />
      
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-conic from-accent/10 via-transparent to-primary/10 bg-pulse"
      />

      {/* 3D Scene Background with Parallax */}
      <motion.div 
        style={{ y: particlesY, opacity: particlesOpacity }}
        className="absolute inset-0 -z-10"
      >
        <Scene3D />
      </motion.div>

      {/* Floating Particles */}
      <motion.div
        ref={particlesRef}
        style={{ y: particlesY, opacity: particlesOpacity }}
        className="absolute inset-0"
      >
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="floating-particle absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`
            }}
          />
        ))}
      </motion.div>

      <motion.div 
        style={{ y: contentY, opacity: contentOpacity }}
        className="container mx-auto px-6 z-10"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Greeting */}
            <motion.p
              className="text-lg text-muted-foreground font-jetbrains hero-reveal"
            >
              Hi there, I'm
            </motion.p>

            {/* Name with typewriter effect */}
            <div className="space-y-4">
              <motion.h1
                className="text-5xl lg:text-7xl font-bold hero-reveal"
              >
                <span className="hero-text">Alex Johnson</span>
              </motion.h1>
              
              <motion.div
                className="overflow-hidden hero-reveal"
              >
                <h2 className="text-2xl lg:text-4xl text-muted-foreground font-jetbrains whitespace-nowrap border-r-2 animate-typewriter animate-blink">
                  Full-Stack Developer
                </h2>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl leading-relaxed hero-reveal"
            >
              I craft exceptional digital experiences with cutting-edge technologies. 
              Specializing in React, Node.js, and modern web development practices 
              that bring ideas to life.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 hero-reveal"
            >
              <Button 
                size="lg" 
                onClick={() => scrollToSection('#projects')}
                className="bg-primary hover:bg-primary/90 glow-effect transition-all duration-300 hover:scale-105 group"
              >
                <ExternalLink className="w-4 h-4 mr-2 group-hover:rotate-45 transition-transform" />
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={downloadResume}
                className="glass-effect hover-glow transition-all duration-300 group"
              >
                <Download className="w-4 h-4 mr-2 group-hover:translate-y-1 transition-transform" />
                Download Resume
              </Button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex space-x-6 pt-4"
            >
              {['GitHub', 'LinkedIn', 'Twitter'].map((social, index) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {social}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - 3D floating elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative h-[600px] flex items-center justify-center"
          >
            {/* Floating geometric shapes */}
            <div className="relative w-full h-full">
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 180, 360] 
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute top-20 left-20 w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-lg glow-effect"
              />
              
              <motion.div
                animate={{ 
                  y: [0, 20, 0],
                  rotate: [360, 180, 0] 
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute top-40 right-16 w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full animate-pulse-glow"
              />
              
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  x: [0, 10, 0],
                  rotate: [0, 90, 180, 270, 360] 
                }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute bottom-32 left-16 w-12 h-12 bg-gradient-to-br from-primary/50 to-accent/50 transform rotate-45 backdrop-blur-sm border border-primary/20"
              />
              
              <motion.div
                animate={{ 
                  y: [0, 25, 0],
                  rotate: [0, -180, -360] 
                }}
                transition={{ 
                  duration: 7, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute bottom-20 right-24 w-24 h-6 bg-gradient-to-r from-accent to-primary rounded-full glow-effect"
              />
            </div>

            {/* Central glowing orb */}
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5] 
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute inset-0 m-auto w-32 h-32 bg-gradient-radial from-primary/30 to-transparent rounded-full blur-xl"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2 text-muted-foreground"
        >
          <span className="text-sm font-jetbrains">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;