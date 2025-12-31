import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Anurag University, Hyderabad",
    year: "2024 – Present",
    grade: "CGPA: 8.95",
    current: true,
  },
  {
    degree: "Intermediate (TSBIE)",
    institution: "Sri Chaitanya Junior Kalasala",
    year: "2022 – 2024",
    grade: "CGPA: 9.25",
  },
  {
    degree: "SSC",
    institution: "Sri Chaitanya Techno School",
    year: "2022",
    grade: "CGPA: 9.7",
  },
];

const achievements = [
  "Participated in 1 National-Level and 3 College-Level hackathons",
  "Spark Ideathon: Secured 3rd Place in college-level innovation challenge",
  "Technical Member, Android Club (2025 – Present)",
  "NPTEL Certified: Programming in Java - 2025",
];

const EducationSection = () => {
  return (
    <section className="py-24 relative" id="education">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title gradient-text mb-4">EDUCATION</h2>
          <p className="text-muted-foreground font-mono">
            Academic journey & achievements
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div className="space-y-6">
            <h3 className="text-xl font-display font-semibold text-primary flex items-center gap-2 mb-6">
              <GraduationCap className="w-5 h-5" />
              ACADEMIC BACKGROUND
            </h3>
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8"
              >
                {/* Timeline line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />
                
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 top-2 w-2 h-2 rounded-full -translate-x-1/2 ${
                    edu.current
                      ? "bg-primary animate-pulse shadow-lg shadow-primary/50"
                      : "bg-muted-foreground"
                  }`}
                />

                <div className="glass-card p-5 hover:neon-border transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono text-primary px-2 py-1 bg-primary/10 rounded">
                      {edu.year}
                    </span>
                    <span className="text-sm font-mono text-secondary">
                      {edu.grade}
                    </span>
                  </div>
                  <h4 className="font-display font-semibold text-foreground mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {edu.institution}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-xl font-display font-semibold text-primary flex items-center gap-2 mb-6">
              <Award className="w-5 h-5" />
              ACHIEVEMENTS
            </h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-4 flex items-start gap-4 hover:neon-border transition-all duration-300"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-magenta flex items-center justify-center text-sm font-display font-bold text-background">
                    {index + 1}
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {achievement}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
