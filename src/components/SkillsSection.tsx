import { motion } from "framer-motion";

const skills = {
  languages: ["Java (DSA)", "Python", "JavaScript", "SQL", "Dart"],
  frameworks: ["React.js", "Node.js", "Express.js", "Next.js", "Flutter"],
  tools: ["Git", "GitHub", "VS Code", "Postman", "MongoDB", "Supabase"],
  concepts: ["Data Structures", "REST APIs", "Generative AI", "LLMs"],
};

const SkillsSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-24 relative" id="skills">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title gradient-text mb-4">TECH STACK</h2>
          <p className="text-muted-foreground font-mono">
            Technologies I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="glass-card p-6 hover:neon-border transition-all duration-500"
            >
              <h3 className="text-lg font-display font-semibold text-primary mb-4 uppercase tracking-wider">
                {category}
              </h3>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {items.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={item}
                    className="tech-badge"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
