import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm font-mono text-muted-foreground">
            <span className="text-primary">&lt;</span>
            Built with passion
            <span className="text-primary"> /&gt;</span>
          </p>
          <p className="text-sm font-mono text-muted-foreground">
            © 2025 Shravan Kumar Thudi. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
