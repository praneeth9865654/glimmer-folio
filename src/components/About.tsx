import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Code, Lightbulb, Rocket, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code with best practices and modern patterns.'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Turning complex challenges into elegant solutions with creative thinking.'
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Optimizing applications for speed, efficiency, and exceptional user experience.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with teams to deliver projects on time and exceed expectations.'
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 relative overflow-hidden">
      {/* Parallax Background Elements */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent"
      />
      
      <div className="container mx-auto px-6">
        <motion.div
          style={{ opacity, scale }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 hero-text">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Passionate full-stack developer with a love for creating digital experiences 
              that make a difference. I believe in the power of clean code, intuitive design, 
              and continuous learning.
            </p>
          </motion.div>

          {/* Personal Story with Animated Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <Card className="glass-effect border-border/50 hover-glow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 hero-text">My Journey</h3>
                
                {/* Animated Description Lines */}
                <div className="space-y-6 overflow-hidden">
                  <motion.div
                    style={{ 
                      x: useTransform(scrollYProgress, [0, 1], [0, -50])
                    }}
                    className="text-2xl lg:text-3xl font-black leading-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
                  >
                    Crafting digital experiences that inspire and innovate
                  </motion.div>
                  
                  <motion.div
                    style={{ 
                      x: useTransform(scrollYProgress, [0, 1], [0, 50])
                    }}
                    className="text-2xl lg:text-3xl font-black leading-tight bg-gradient-to-r from-accent via-cyan-400 to-primary bg-clip-text text-transparent"
                  >
                    Turning complex problems into elegant solutions
                  </motion.div>
                </div>
                
                <motion.p 
                  className="text-muted-foreground leading-relaxed mt-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Every project is an opportunity to push boundaries and create meaningful impact through technology.
                </motion.p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Core Values Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <Card className="glass-effect border-border/50 h-full group hover-glow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Personal Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '5+', label: 'Years Experience' },
              { number: '20+', label: 'Happy Clients' },
              { number: '∞', label: 'Lines of Code' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 glass-effect rounded-lg border border-border/50"
              >
                <div className="text-3xl lg:text-4xl font-bold hero-text mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;