import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import SectionHeading from "./SectionHeading";

const Projects = () => {
  return (
    <section id="projects" className="section-border section-padding">
      <SectionHeading subtitle="A selection of work I've built and contributed to">
        Projects
      </SectionHeading>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <motion.article
            key={project.title}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card group flex flex-col overflow-hidden p-0"
          >
            <div className="relative aspect-video overflow-hidden bg-neutral-800">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center gap-3 bg-neutral-950/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 text-neutral-950 transition-transform hover:scale-110"
                  aria-label={`View ${project.title} live`}
                >
                  <FaExternalLinkAlt size={14} />
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-600 bg-neutral-900 text-white transition-transform hover:scale-110"
                  aria-label={`View ${project.title} source code`}
                >
                  <FaGithub size={16} />
                </a>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-5">
              <h3 className="mb-2 text-lg font-semibold text-white">
                {project.title}
              </h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-neutral-400">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
