import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Projects = () => {
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
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
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
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`${project.featured ? 'lg:col-span-2' : ''}`}
            >
              <Card className="glass-effect border-border/50 hover-glow group overflow-hidden h-full">
                <div className={`${project.featured ? 'lg:flex lg:items-center' : ''}`}>
                  {/* Project Image */}
                  <div className={`relative overflow-hidden ${project.featured ? 'lg:w-1/2' : ''}`}>
                    <div 
                      className="h-64 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center"
                    >
                      <div className="text-6xl opacity-30">🚀</div>
                    </div>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
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
                    </div>
                  </div>

                  {/* Project Content */}
                  <CardContent className={`p-6 ${project.featured ? 'lg:w-1/2' : ''}`}>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-jetbrains bg-primary/10 text-primary rounded-full border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex space-x-4 pt-4">
                        <Button
                          variant="outline"
                          size="sm"
                          className="glass-effect"
                          asChild
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            GitHub
                          </a>
                        </Button>
                        <Button
                          size="sm"
                          className="bg-primary hover:bg-primary/90"
                          asChild
                        >
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
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