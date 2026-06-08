import { RiReactjsLine } from "react-icons/ri";
import { SiAwsamplify, SiDocker, SiDotnet, SiExpress, SiJavascript, SiNodedotjs, SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { FaAws, FaCss3, FaHtml5 } from "react-icons/fa";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

// react, redux, tailwind, typescript, html5, css3, javascript, node.js, express, docker, aws, asp.net core

const TECH_STACK = [
  { icon: RiReactjsLine, label: "React", color: "text-cyan-400", glow: "group-hover:shadow-cyan-500/20" },
  { icon: SiRedux, label: "Redux", color: "text-purple-400", glow: "group-hover:shadow-purple-500/20" },
  { icon: RiTailwindCssFill, label: "Tailwind", color: "text-teal-400", glow: "group-hover:shadow-teal-500/20" },
  { icon: SiTypescript, label: "TypeScript", color: "text-blue-400", glow: "group-hover:shadow-blue-500/20" },
  { icon: SiNodedotjs, label: "Node.js", color: "text-green-400", glow: "group-hover:shadow-green-500/20" },
  { icon: SiExpress, label: "Express", color: "text-gray-400", glow: "group-hover:shadow-gray-500/20" },
  { icon: SiDocker, label: "Docker", color: "text-blue-400", glow: "group-hover:shadow-blue-500/20" },
  { icon: FaAws, label: "AWS", color: "text-orange-400", glow: "group-hover:shadow-orange-500/20" },
  { icon: SiDotnet, label: "ASP.NET Core", color: "text-green-400", glow: "group-hover:shadow-green-500/20" },
];

const iconVariants = (duration) => ({
  initial: { y: 0 },
  animate: {
    y: [0, -8, 0],
    transition: {
      duration,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
});

const Technologies = () => {
  return (
    <section id="skills" className="section-border section-padding">
      <SectionHeading subtitle="Tools and frameworks I work with daily">
        Technologies
      </SectionHeading>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap items-center justify-center gap-6"
      >
        {TECH_STACK.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <motion.div
              key={tech.label}
              variants={iconVariants(2 + index * 0.5)}
              initial="initial"
              animate="animate"
              className={`group flex flex-col items-center gap-3 rounded-2xl border border-neutral-800/60 bg-neutral-900/30 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-700 hover:shadow-lg ${tech.glow}`}
            >
              <Icon className={`text-5xl md:text-6xl ${tech.color}`} />
              <span className="text-sm font-medium text-neutral-400 group-hover:text-neutral-200">
                {tech.label}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Technologies;
