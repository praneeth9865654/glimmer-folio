import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

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
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-gradient-conic from-primary/5 via-transparent to-accent/5"
      />
      
      <div className="container mx-auto px-6">
        <motion.div
          style={{ opacity }}
          className="max-w-5xl mx-auto"
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
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="glass-effect border-border/50 hover-glow">
                    <CardContent className="p-8">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                        <div className="flex-1">
                          <h4 className="text-xl font-bold mb-2">{exp.title}</h4>
                          <div className="flex items-center space-x-4 text-muted-foreground mb-2">
                            <span className="font-medium text-primary">{exp.company}</span>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span className="text-sm">{exp.location}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-1 text-muted-foreground mb-4">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{exp.period}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h5 className="font-medium mb-3">Technologies Used</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="secondary"
                              className="glass-effect"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h5 className="font-medium mb-3">Key Achievements</h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li
                              key={achIndex}
                              className="flex items-start space-x-2 text-muted-foreground"
                            >
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
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
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;