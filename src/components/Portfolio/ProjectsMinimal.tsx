import { motion } from "framer-motion";
import { portfolioData } from "@/lib/portfolio-data";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ProjectsMinimal = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center font-science"
        >
          <span className="text-foreground">{portfolioData.projects.title.split(" ")[0]}</span>{" "}
          <span className="text-accent">{portfolioData.projects.title.split(" ").slice(1).join(" ")}</span>
        </motion.h2>



        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {portfolioData.projects.projectList.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative bg-black border-2 border-accent rounded-[2rem] p-5 overflow-hidden hover:shadow-[0_0_30px_#16FF00] transition-all duration-300 flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative h-48 w-full mb-4 overflow-hidden rounded-xl bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow text-center">
                <h3 className="text-lg font-bold text-foreground mb-3 leading-tight">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-6 line-clamp-4 flex-grow">
                  {project.description}
                </p>

                {/* Button */}
                <div className="mt-auto pt-2 flex justify-center">
                  <a
                    href={project.demo || project.github || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-2 border-2 border-[#FFED00] text-[#FFED00] rounded-full text-sm font-bold hover:bg-[#FFED00] hover:text-black transition-all duration-300"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsMinimal;
