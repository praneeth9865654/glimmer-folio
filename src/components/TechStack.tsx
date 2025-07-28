import { motion } from 'framer-motion';

const TechStack = () => {
  const technologies = [
    { name: 'React', icon: '⚛️', color: 'from-blue-400 to-cyan-400' },
    { name: 'TypeScript', icon: '📘', color: 'from-blue-600 to-blue-400' },
    { name: 'Node.js', icon: '🟢', color: 'from-green-500 to-green-400' },
    { name: 'Python', icon: '🐍', color: 'from-yellow-500 to-green-500' },
    { name: 'Next.js', icon: '▲', color: 'from-gray-800 to-gray-600' },
    { name: 'GraphQL', icon: '🔷', color: 'from-pink-500 to-purple-500' },
    { name: 'PostgreSQL', icon: '🐘', color: 'from-blue-700 to-blue-500' },
    { name: 'MongoDB', icon: '🍃', color: 'from-green-600 to-green-400' },
    { name: 'AWS', icon: '☁️', color: 'from-orange-500 to-yellow-500' },
    { name: 'Docker', icon: '🐳', color: 'from-blue-500 to-cyan-400' },
    { name: 'Git', icon: '🌿', color: 'from-orange-600 to-red-500' },
    { name: 'VS Code', icon: '💻', color: 'from-blue-600 to-blue-400' },
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
        <motion.div 
          className="flex space-x-8"
          animate={{ x: [0, -2000] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {duplicatedTechs.map((tech, index) => (
            <motion.div
              key={`${tech.name}-${index}`}
              whileHover={{ 
                scale: 1.15, 
                y: -10,
                rotateY: 180,
                transition: { duration: 0.3 }
              }}
              className="flex-shrink-0 group cursor-pointer perspective-1000"
            >
              <div className="glass-effect p-6 rounded-2xl border border-border/50 hover-glow transition-all duration-500 min-w-[180px] relative overflow-hidden">
                {/* Animated Background */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-20`}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Glowing Border Effect */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl border-2 border-transparent"
                  style={{
                    background: `linear-gradient(45deg, transparent, ${tech.color.includes('blue') ? '#3B82F6' : tech.color.includes('green') ? '#10B981' : '#8B5CF6'}, transparent)`,
                    backgroundClip: 'border-box'
                  }}
                  initial={{ opacity: 0, rotate: 0 }}
                  whileHover={{ opacity: 1, rotate: 360 }}
                  transition={{ duration: 1 }}
                />
                
                <div className="flex flex-col items-center space-y-4 relative z-10">
                  {/* Modern Tech Icon */}
                  <motion.div 
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center text-2xl shadow-lg`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -10, 10, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    {tech.icon}
                  </motion.div>
                  
                  <motion.h3 
                    className="font-jetbrains font-bold text-center group-hover:text-primary transition-colors duration-300 text-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech.name}
                  </motion.h3>

                  {/* Skill Level Indicator */}
                  <motion.div 
                    className="w-full h-1 bg-border/30 rounded-full overflow-hidden"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.div 
                      className={`h-full bg-gradient-to-r ${tech.color} rounded-full`}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: Math.random() * 0.3 + 0.7 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

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