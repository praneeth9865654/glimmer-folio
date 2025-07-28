import { motion } from 'framer-motion';

const TechStack = () => {
  const technologies = [
    { name: 'React', color: '#61DAFB' },
    { name: 'TypeScript', color: '#3178C6' },
    { name: 'Node.js', color: '#339933' },
    { name: 'Python', color: '#3776AB' },
    { name: 'Next.js', color: '#000000' },
    { name: 'GraphQL', color: '#E10098' },
    { name: 'PostgreSQL', color: '#336791' },
    { name: 'MongoDB', color: '#47A248' },
    { name: 'AWS', color: '#FF9900' },
    { name: 'Docker', color: '#2496ED' },
    { name: 'Kubernetes', color: '#326CE5' },
    { name: 'Redis', color: '#DC382D' },
  ];

  // Duplicate array for seamless infinite scroll
  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 hero-text">
            Tech Stack
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>
      </div>

      {/* Horizontal scrolling marquee */}
      <div className="relative">
        <div className="flex space-x-8 animate-marquee">
          {duplicatedTechs.map((tech, index) => (
            <motion.div
              key={`${tech.name}-${index}`}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex-shrink-0 group cursor-pointer"
            >
              <div className="glass-effect p-6 rounded-xl border border-border/50 hover-glow transition-all duration-300 min-w-[160px]">
                <div className="flex flex-col items-center space-y-3">
                  {/* Tech icon placeholder - in a real project, you'd use actual logos */}
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-xl"
                    style={{ backgroundColor: tech.color }}
                  >
                    {tech.name.charAt(0)}
                  </div>
                  
                  <h3 className="font-jetbrains font-medium text-center group-hover:text-primary transition-colors duration-300">
                    {tech.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
      </div>

      {/* Skills categories */}
      <div className="container mx-auto px-6 mt-20">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Frontend',
              skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
              icon: '🎨'
            },
            {
              title: 'Backend',
              skills: ['Node.js', 'Python', 'PostgreSQL', 'GraphQL', 'REST APIs'],
              icon: '⚙️'
            },
            {
              title: 'DevOps',
              skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Monitoring'],
              icon: '🚀'
            }
          ].map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-effect p-6 rounded-xl border border-border/50 hover-glow group"
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-xl font-bold hero-text">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index * 0.2) + (skillIndex * 0.1) }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;