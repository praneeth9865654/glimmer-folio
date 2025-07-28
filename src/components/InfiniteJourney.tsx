import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const InfiniteJourney = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Horizontal scroll speed - moderately fast
  const x1 = useTransform(scrollYProgress, [0, 1], [0, -800]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 600]);

  const journeyTexts = [
    "Crafting digital experiences that inspire and innovate",
    "Turning complex problems into elegant solutions"
  ];

  return (
    <section ref={sectionRef} className="py-24 overflow-hidden bg-background/50">
      <div className="space-y-12">
        {/* First line - moves left */}
        <div className="relative overflow-hidden">
          <motion.div
            style={{ x: x1 }}
            className="flex whitespace-nowrap"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mr-16 font-inter tracking-tight"
              >
                {journeyTexts[0]}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Second line - moves right */}
        <div className="relative overflow-hidden">
          <motion.div
            style={{ x: x2 }}
            className="flex whitespace-nowrap"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black bg-gradient-to-r from-accent via-cyan-400 to-primary bg-clip-text text-transparent mr-16 font-inter tracking-tight"
              >
                {journeyTexts[1]}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InfiniteJourney;