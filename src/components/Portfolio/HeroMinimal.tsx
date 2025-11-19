import { motion } from "framer-motion";
import { portfolioData } from "@/lib/portfolio-data";
import { Mail, Download, Linkedin, Github, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroMinimal = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector("#about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 md:pt-0 relative bg-white"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="mb-8"
          >
            <img
              src={portfolioData.hero.image}
              alt={portfolioData.hero.name}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mx-auto border-4 border-gray-200"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-4"
          >
            {portfolioData.hero.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl md:text-3xl text-gray-600 mb-6"
          >
            {portfolioData.hero.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            {portfolioData.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <Button
              size="lg"
              className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-3 text-base"
              asChild
            >
              <a href="mailto:7efnaw.ii@gmail.com" className="flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                Get In Touch
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-900 text-gray-900 hover:bg-gray-50 px-8 py-3 text-base"
              asChild
            >
              <a
                href="https://drive.google.com/file/d/1Fv_JPSUg_pdEk6e-P7DmhlHFT5AZyAuG/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center gap-6"
          >
            {[
              { href: "https://www.linkedin.com/in/yousef-mahmoud-157b23219", icon: Linkedin },
              { href: "https://github.com/7efnawi", icon: Github },
              { href: "mailto:7efnaw.ii@gmail.com", icon: Mail },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.href.includes("linkedin") || social.href.includes("github") ? "_blank" : undefined}
                rel={social.href.includes("linkedin") || social.href.includes("github") ? "noopener noreferrer" : undefined}
                className="text-gray-600 hover:text-gray-900 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 hover:text-gray-900 transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1, duration: 0.5 },
            y: {
              delay: 1.5,
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowDown size={32} />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroMinimal;
