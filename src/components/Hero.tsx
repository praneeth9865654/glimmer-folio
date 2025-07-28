import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Scene3D from './Scene3D';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
      
      {/* 3D Scene Background */}
      <div className="absolute inset-0 -z-10">
        <Scene3D />
      </div>

      <div className="container mx-auto px-6 z-10">
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground font-jetbrains"
            >
              Hi there, I'm
            </motion.p>

            {/* Name with typewriter effect */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-5xl lg:text-7xl font-bold"
              >
                <span className="hero-text">Alex Johnson</span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="overflow-hidden"
              >
                <h2 className="text-2xl lg:text-4xl text-muted-foreground font-jetbrains whitespace-nowrap border-r-2 animate-typewriter animate-blink">
                  Full-Stack Developer
                </h2>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
            >
              I craft exceptional digital experiences with cutting-edge technologies. 
              Specializing in React, Node.js, and modern web development practices 
              that bring ideas to life.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 glow-effect transition-all duration-300 hover:scale-105"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="glass-effect hover-glow transition-all duration-300"
              >
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
      </div>

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