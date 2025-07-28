import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github, Rocket, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useRef } from 'react';

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const cardsY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with Next.js, Stripe payments, and real-time inventory management.',
      tech: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Prisma'],
      image: '/api/placeholder/600/400',
      github: '#',
      demo: '#',
      featured: true
    },
    {
      title: 'Real-Time Chat App',
      description: 'Scalable chat application with WebSocket connections, message encryption, and file sharing capabilities.',
      tech: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Redis'],
      image: '/api/placeholder/600/400',
      github: '#',
      demo: '#',
      featured: true
    },
    {
      title: 'AI Dashboard',
      description: 'Machine learning dashboard for data visualization and model training with interactive charts.',
      tech: ['Python', 'FastAPI', 'React', 'D3.js', 'TensorFlow'],
      image: '/api/placeholder/600/400',
      github: '#',
      demo: '#',
      featured: false
    },
    {
      title: 'Task Management System',
      description: 'Collaborative project management tool with drag-and-drop interface and team collaboration features.',
      tech: ['Vue.js', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      image: '/api/placeholder/600/400',
      github: '#',
      demo: '#',
      featured: false
    },
    {
      title: 'Cryptocurrency Tracker',
      description: 'Real-time crypto price tracking with portfolio management and advanced charting capabilities.',
      tech: ['React', 'TypeScript', 'Chart.js', 'CoinGecko API', 'Tailwind'],
      image: '/api/placeholder/600/400',
      github: '#',
      demo: '#',
      featured: false
    },
    {
      title: 'Weather Analytics',
      description: 'Weather data analysis platform with predictive modeling and interactive maps.',
      tech: ['Python', 'Django', 'PostgreSQL', 'Leaflet', 'Celery'],
      image: '/api/placeholder/600/400',
      github: '#',
      demo: '#',
      featured: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section ref={sectionRef} id="projects" className="py-20 relative overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-primary/5"
      />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              delay: i * 4,
              ease: "easeInOut"
            }}
            className="absolute"
            style={{
              left: `${10 + i * 25}%`,
              top: `${10 + (i % 2) * 70}%`
            }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg backdrop-blur-sm border border-primary/20" />
          </motion.div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 hero-text">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for creating 
            innovative solutions to real-world problems.
          </p>
        </motion.div>

        <motion.div
          style={{ y: cardsY }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3, type: "spring", stiffness: 300 }
              }}
              className={`${project.featured ? 'lg:col-span-2' : ''} group`}
            >
              <Card className="glass-effect border-border/50 hover-glow overflow-hidden h-full relative">
                {/* Animated Background Gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.4 }}
                />
                
                <div className={`relative z-10 ${project.featured ? 'lg:flex lg:items-center' : ''}`}>
                  {/* Project Image */}
                  <div className={`relative overflow-hidden ${project.featured ? 'lg:w-1/2' : ''}`}>
                    <motion.div 
                      className="h-48 sm:h-64 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Project Icon */}
                      <motion.div
                        animate={{ 
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="text-4xl sm:text-6xl opacity-30"
                      >
                        🚀
                      </motion.div>
                      
                      {/* Featured Badge */}
                      {project.featured && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute top-4 right-4 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full p-2"
                        >
                          <Star className="w-4 h-4 text-accent" />
                        </motion.div>
                      )}
                      
                      {/* Floating Tech Elements */}
                      <div className="absolute inset-0 overflow-hidden">
                        {project.tech.slice(0, 3).map((tech, i) => (
                          <motion.div
                            key={tech}
                            animate={{
                              y: [0, -10, 0],
                              x: [0, 5, 0],
                              opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{
                              duration: 3 + i,
                              repeat: Infinity,
                              delay: i * 0.5
                            }}
                            className="absolute font-jetbrains text-xs text-primary/40"
                            style={{
                              left: `${20 + i * 30}%`,
                              top: `${20 + i * 15}%`
                            }}
                          >
                            {tech}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                    
                    {/* Enhanced Hover Overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex items-center justify-center space-x-4"
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          className="glass-effect"
                          asChild
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      </motion.div>
                      
                      <motion.div
                        initial={{ scale: 0, rotate: 180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ delay: 0.1 }}
                      >
                        <Button
                          size="sm"
                          className="bg-primary hover:bg-primary/90"
                          asChild
                        >
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Enhanced Project Content */}
                  <CardContent className={`p-6 sm:p-8 ${project.featured ? 'lg:w-1/2' : ''} relative z-10`}>
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          {project.featured && (
                            <motion.div
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.5 }}
                              className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center"
                            >
                              <Rocket className="w-4 h-4 text-accent" />
                            </motion.div>
                          )}
                          <h3 className="text-lg sm:text-xl font-bold group-hover:text-primary transition-colors duration-300">
                            {project.title}
                          </h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                          {project.description}
                        </p>
                      </div>

                      {/* Enhanced Tech Stack */}
                      <div>
                        <h4 className="text-sm font-medium mb-3 text-muted-foreground">Built with</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: techIndex * 0.1 }}
                              whileHover={{ scale: 1.05, y: -2 }}
                              className="px-3 py-1.5 text-xs font-jetbrains bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Enhanced Links */}
                      <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            className="glass-effect w-full sm:w-auto"
                            asChild
                          >
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-2" />
                              GitHub
                            </a>
                          </Button>
                        </motion.div>
                        
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            size="sm"
                            className="bg-primary hover:bg-primary/90 w-full sm:w-auto"
                            asChild
                          >
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="glass-effect hover-glow"
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;