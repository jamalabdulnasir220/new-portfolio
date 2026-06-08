import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const About = () => {
  return (
    <section id="about" className="section-border section-padding">
      <SectionHeading subtitle="A little about who I am and what I do">
        About <span className="text-neutral-500">Me</span>
      </SectionHeading>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl"
      >
        <div className="card relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-500 to-purple-500" />
          <p className="pl-6 text-lg leading-relaxed text-neutral-300">
            {ABOUT_TEXT}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { value: "3+", label: "Years Experience" },
            { value: "10+", label: "Projects Built" },
            { value: "5+", label: "Technologies" },
            { value: "100%", label: "Passion" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-neutral-800/60 bg-neutral-900/30 p-4 text-center"
            >
              <p className="text-2xl font-bold text-cyan-400">{stat.value}</p>
              <p className="mt-1 text-xs text-neutral-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
