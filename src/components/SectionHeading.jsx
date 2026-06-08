import { motion } from "framer-motion";

const SectionHeading = ({ children, subtitle }) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 30 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-12 text-center md:mb-16"
    >
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
        {children}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-lg text-neutral-500">{subtitle}</p>
      )}
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500" />
    </motion.div>
  );
};

export default SectionHeading;
