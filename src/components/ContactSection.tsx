import { motion } from "framer-motion";
import { Mail, Linkedin, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section className="py-24 relative" id="contact">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title gradient-text mb-4">GET IN TOUCH</h2>
          <p className="text-muted-foreground font-mono">
            Let's build something amazing together
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card p-8 neon-border">
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <a
                href="mailto:shravankumarthudi777@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-muted/20 hover:bg-muted/40 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-cyan to-neon-blue flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-background" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                    Email
                  </p>
                  <p className="text-sm font-medium text-foreground truncate">
                    shravankumarthudi777@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/shravan-kumar-thudi-91a2b736b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-muted/20 hover:bg-muted/40 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Linkedin className="w-5 h-5 text-background" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                    LinkedIn
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    /in/ShravanKumar
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/20">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-magenta to-pink-500 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-background" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                    Phone
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    +91 94407 14277
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/20">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-background" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                    Location
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    Hyderabad, Telangana
                  </p>
                </div>
              </div>
            </div>

            <a href="mailto:shravankumarthudi777@gmail.com">
              <Button className="w-full bg-gradient-to-r from-neon-cyan to-neon-magenta hover:opacity-90 text-background font-display font-semibold tracking-wider h-12">
                <Send className="w-4 h-4 mr-2" />
                SEND MESSAGE
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
