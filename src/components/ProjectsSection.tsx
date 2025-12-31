import { motion } from "framer-motion";
import { ExternalLink, Github, Bot, Leaf, Heart } from "lucide-react";

const projects = [
  {
    title: "Agentic Campus Concierge",
    subtitle: "GenAI Hackathon Project",
    description:
      "AI concierge utilizing LLMs to automate 80% of routine student queries and campus service requests. Engineered prompt workflows reducing manual administrative response time.",
    technologies: ["Python", "Generative AI", "LLMs"],
    icon: Bot,
    gradient: "from-neon-cyan to-neon-blue",
  },
  {
    title: "Krishi Sakhi",
    subtitle: "AI-Powered Agri-Tech App",
    description:
      "Multilingual Flutter app with Wit.ai voice assistance and Roboflow computer vision for crop disease diagnosis. Integrated Gemini API for climate-resilient farming advisories.",
    technologies: ["Flutter", "Dart", "Supabase", "Gemini AI"],
    icon: Leaf,
    gradient: "from-green-400 to-emerald-500",
  },
  {
    title: "MediVault.AI",
    subtitle: "Healthcare Management System",
    description:
      "Secure dashboard with RBAC and crypto-based ephemeral sharing links. Real-time health trend visualization using Chart.js with AI microservices for parsing medical records.",
    technologies: ["MERN Stack", "Chart.js", "JWT"],
    icon: Heart,
    gradient: "from-neon-magenta to-pink-500",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-24 relative" id="projects">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title gradient-text mb-4">PROJECTS</h2>
          <p className="text-muted-foreground font-mono">
            Building solutions that matter
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group"
            >
              <div className="glass-card h-full p-6 hover:neon-border transition-all duration-500 flex flex-col">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <project.icon className="w-full h-full text-background" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-display font-bold text-foreground mb-1">
                  {project.title}
                </h3>
                <p className="text-sm font-mono text-primary mb-4">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-mono bg-muted/30 rounded border border-border/50 text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors">
                    <Github className="w-4 h-4" />
                    Code
                  </button>
                  <button className="flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
