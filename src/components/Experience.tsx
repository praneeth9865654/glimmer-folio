import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, ExternalLink, Code, Zap, Trophy } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const lineProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const experiences = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Lead developer for multiple high-traffic web applications serving 100K+ users. Implemented microservices architecture and improved system performance by 40%.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
      achievements: [
        'Reduced page load time by 60% through optimization',
        'Led team of 5 developers on critical projects',
        'Implemented CI/CD pipeline reducing deployment time by 80%'
      ]
    },
    {
      title: 'Full-Stack Developer',
      company: 'StartupXYZ',
      location: 'Austin, TX',
      period: '2020 - 2022',
      description: 'Built scalable web applications from scratch using modern technologies. Collaborated with design and product teams to deliver user-centric solutions.',
      technologies: ['Vue.js', 'Python', 'MongoDB', 'Firebase', 'GCP'],
      achievements: [
        'Developed 3 major features that increased user engagement by 35%',
        'Mentored 2 junior developers',
        'Implemented real-time features using WebSocket'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency Pro',
      location: 'Remote',
      period: '2019 - 2020',
      description: 'Created responsive, interactive websites for diverse clients. Focused on performance optimization and cross-browser compatibility.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Sass', 'Webpack'],
      achievements: [
        'Delivered 15+ client projects on time and budget',
        'Improved mobile performance across all projects by 45%',
        'Established frontend coding standards for the team'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Technology',
      location: 'California, USA',
      period: '2015 - 2019',
      details: 'Focused on software engineering, algorithms, and web technologies. Graduated Magna Cum Laude.'
    }
  ];

  const certifications = [
    'AWS Certified Solutions Architect',
    'Google Cloud Professional Developer',
    'MongoDB Certified Developer',
    'React Advanced Certification'
  ];

  return (
    <section ref={sectionRef} id="experience" className="py-20 relative overflow-hidden">
      {/* Modern Timeline Background */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent transform -translate-x-1/2" />
      
      {/* Animated Progress Line */}
      <motion.div 
        className="absolute left-1/2 top-0 w-px bg-gradient-to-b from-primary via-accent to-primary transform -translate-x-1/2 origin-top"
        style={{ 
          scaleY: useTransform(scrollYProgress, [0, 1], [0, 1]),
          height: "100%"
        }}
      />

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              delay: i * 2,
              ease: "linear"
            }}
            className="absolute"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 4) * 20}%`
            }}
          >
            <div className={`w-2 h-2 ${i % 3 === 0 ? 'bg-primary/20' : i % 3 === 1 ? 'bg-accent/20' : 'bg-cyan-500/20'} 
              ${i % 2 === 0 ? 'rounded-full' : 'rotate-45'}`} />
          </motion.div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 hero-text">
              Experience & Education
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A timeline of my professional journey, showcasing growth, achievements, 
              and the impact I've made in various roles.
            </p>
          </motion.div>

          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Work Experience</h3>
            <div className="relative max-w-6xl mx-auto">
              {/* Central Timeline Line */}
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-60"
              />

              <div className="space-y-16">
                {experiences.map((experience, index) => (
                  <motion.div
                    key={experience.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'justify-start' : 'justify-end'
                    }`}
                  >
                    {/* Timeline Node */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                      className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-2 border-background shadow-lg z-10"
                      style={{
                        boxShadow: '0 0 15px hsl(var(--primary)/0.6)'
                      }}
                    />

                    {/* Experience Card - Smaller and Alternating */}
                    <Card className={`glass-effect border-border/30 hover-glow transition-all duration-500 w-full max-w-md ${
                      index % 2 === 0 ? 'mr-8 lg:mr-16' : 'ml-8 lg:ml-16'
                    }`}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-bold hero-text mb-1">
                              {experience.title}
                            </h3>
                            <p className="text-base text-primary font-semibold mb-1">
                              {experience.company}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {experience.period}
                            </p>
                          </div>
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0"
                          >
                            <Code className="w-5 h-5 text-primary" />
                          </motion.div>
                        </div>
                        
                        <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                          {experience.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-1.5">
                          {experience.technologies.slice(0, 4).map((tech, techIndex) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: index * 0.2 + techIndex * 0.1 }}
                              className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education & Certifications */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">Education</h3>
              {education.map((edu, index) => (
                <Card key={index} className="glass-effect border-border/50 hover-glow">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold mb-2">{edu.degree}</h4>
                    <div className="text-primary font-medium mb-2">{edu.school}</div>
                    <div className="flex items-center space-x-4 text-muted-foreground text-sm mb-3">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm">{edu.details}</p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">Certifications</h3>
              <Card className="glass-effect border-border/50 hover-glow">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {certifications.map((cert, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-center space-x-3 p-3 rounded-lg glass-effect border border-border/30"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="font-medium">{cert}</span>
                        <ExternalLink className="w-4 h-4 text-muted-foreground ml-auto" />
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;