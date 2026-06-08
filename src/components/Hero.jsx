import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import { HiArrowDown } from "react-icons/hi";
import ResumeDownload from "./ResumeDownload";

const container = (delay) => ({
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, delay },
  },
});

const Hero = () => {
  return (
    <section id="hero" className="section-border section-padding">
      <div className="relative flex min-h-[70vh] flex-col justify-center">
        <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />

        <div className="relative z-10 max-w-3xl">
          <motion.p
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="mb-4 text-sm font-medium uppercase tracking-widest text-cyan-400"
          >
            Full-Stack Developer
          </motion.p>

          <motion.h1
            variants={container(0.15)}
            initial="hidden"
            animate="visible"
            className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl"
          >
            Abdul Nasir{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Jamal
            </span>
          </motion.h1>

          <motion.p
            variants={container(0.3)}
            initial="hidden"
            animate="visible"
            className="mb-8 max-w-2xl text-lg leading-relaxed text-neutral-400"
          >
            {HERO_CONTENT}
          </motion.p>

          <motion.div
            variants={container(0.45)}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-4"
          >
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-secondary">
              Get in Touch
            </a>
            <ResumeDownload className="btn-secondary" />
          </motion.div>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 text-neutral-500 transition-colors hover:text-cyan-400"
          aria-label="Scroll to about section"
        >
          <HiArrowDown className="animate-bounce" size={24} />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
