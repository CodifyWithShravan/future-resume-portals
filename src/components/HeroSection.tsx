import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-neon-cyan/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-neon-magenta/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass-card border-primary/30"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-mono text-muted-foreground">
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-wider mb-6"
          >
            <span className="neon-text text-primary">SHRAVAN</span>
            <br />
            <span className="text-foreground">KUMAR THUDI</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-xl md:text-2xl font-mono text-muted-foreground mb-8"
          >
            <span className="text-primary">&lt;</span>
            Full Stack Developer
            <span className="text-secondary"> & </span>
            GenAI Enthusiast
            <span className="text-primary"> /&gt;</span>
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="max-w-2xl mx-auto text-muted-foreground mb-12 leading-relaxed"
          >
            Computer Science undergraduate specializing in building scalable web 
            and mobile applications. Passionate about leveraging Flutter, React, 
            and AI model integration to solve real-world problems.
          </motion.p>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-wrap justify-center gap-4 md:gap-6"
          >
            <a
              href="mailto:shravankumarthudi777@gmail.com"
              className="flex items-center gap-2 px-4 py-2 glass-card hover:neon-border transition-all duration-300 group"
            >
              <Mail className="w-4 h-4 text-primary group-hover:animate-pulse" />
              <span className="text-sm font-mono">Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/shravan-kumar-thudi-91a2b736b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 glass-card hover:neon-border transition-all duration-300 group"
            >
              <Linkedin className="w-4 h-4 text-primary group-hover:animate-pulse" />
              <span className="text-sm font-mono">LinkedIn</span>
            </a>
            <div className="flex items-center gap-2 px-4 py-2 glass-card">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-mono">Hyderabad, India</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 glass-card">
              <Phone className="w-4 h-4 text-primary" />
              <span className="text-sm font-mono">+91 94407 14277</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-2 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
