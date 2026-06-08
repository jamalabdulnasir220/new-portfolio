import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const Experience = () => {
  return (
    <section id="experience" className="section-border section-padding">
      <SectionHeading subtitle="My professional journey so far">
        Experience
      </SectionHeading>

      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-[7px] top-2 hidden h-[calc(100%-16px)] w-px bg-gradient-to-b from-cyan-500/50 via-neutral-700 to-transparent md:block" />

        <div className="space-y-8">
          {EXPERIENCES.map((experience, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -30 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative md:pl-10"
            >
              <div className="absolute left-0 top-6 hidden h-3.5 w-3.5 rounded-full border-2 border-cyan-500 bg-neutral-950 md:block" />

              <div className="card">
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-white">
                    {experience.role}
                  </h3>
                  <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
                    {experience.year}
                  </span>
                </div>
                <p className="mb-3 text-sm font-medium text-purple-300/80">
                  {experience.company}
                </p>
                <p className="mb-4 text-sm leading-relaxed text-neutral-400">
                  {experience.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
