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

          {/* Right side - Coding Animation Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative h-[500px] md:h-[600px] flex items-center justify-center"
          >
            {/* Code Editor Mockup */}
            <div className="relative w-full max-w-lg">
              {/* Terminal Window */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="bg-background/20 backdrop-blur-xl border border-border/30 rounded-xl overflow-hidden glow-effect"
              >
                {/* Terminal Header */}
                <div className="flex items-center px-4 py-3 bg-muted/10 border-b border-border/20">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="mx-4 text-xs text-muted-foreground font-jetbrains">
                    portfolio.tsx
                  </div>
                </div>

                {/* Code Content */}
                <div className="p-6 space-y-3 font-jetbrains text-sm">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 }}
                    className="text-purple-400"
                  >
                    <span className="text-blue-400">const</span> developer = {"{"}
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4 }}
                    className="ml-4"
                  >
                    <span className="text-cyan-400">name:</span> <span className="text-green-400">"Alex Johnson"</span>,
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.6 }}
                    className="ml-4"
                  >
                    <span className="text-cyan-400">skills:</span> [<span className="text-green-400">"React"</span>, <span className="text-green-400">"Node.js"</span>, <span className="text-green-400">"TypeScript"</span>],
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.8 }}
                    className="ml-4"
                  >
                    <span className="text-cyan-400">passion:</span> <span className="text-green-400">"Creating Amazing UX"</span>,
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.0 }}
                    className="ml-4"
                  >
                    <span className="text-cyan-400">status:</span> <span className="text-green-400">"Available for hire"</span>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.2 }}
                    className="text-purple-400"
                  >
                    {"};"}
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating Code Elements */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0] 
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute -top-8 -left-8 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-lg p-3 font-jetbrains text-xs text-primary"
              >
                &lt;React/&gt;
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 15, 0],
                  x: [0, 5, 0] 
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1 
                }}
                className="absolute -top-4 -right-12 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-lg p-3 font-jetbrains text-xs text-accent"
              >
                {"{ }"}
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [0, -3, 0] 
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 2 
                }}
                className="absolute -bottom-6 -left-6 bg-green-500/20 backdrop-blur-sm border border-green-500/30 rounded-lg p-2 font-jetbrains text-xs text-green-400"
              >
                npm run dev
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 12, 0],
                  rotate: [0, 2, 0] 
                }}
                transition={{ 
                  duration: 7, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 0.5 
                }}
                className="absolute -bottom-8 -right-4 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 rounded-lg p-2 font-jetbrains text-xs text-blue-400"
              >
                git commit
              </motion.div>

              {/* Cursor Animation */}
              <motion.div
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="absolute bottom-6 right-6 w-2 h-5 bg-primary"
              />
            </div>

            {/* Background Code Rain Effect */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ 
                    y: [0, 400],
                    opacity: [0, 0.3, 0]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    delay: i * 1.5,
                    ease: "linear"
                  }}
                  className="absolute font-jetbrains text-xs text-primary/20"
                  style={{ left: `${10 + i * 12}%` }}
                >
                  {['function', 'const', 'let', 'return', 'if', 'else', 'for', 'while'][i]}
                </motion.div>
              ))}
            </div>
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