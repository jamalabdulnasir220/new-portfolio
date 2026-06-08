import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import ResumeDownload from "./ResumeDownload";

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <SectionHeading subtitle="Have a project in mind? Let's talk.">
        Get in Touch
      </SectionHeading>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-lg"
      >
        <div className="card space-y-6 text-center">
          <a
            href={`mailto:${CONTACT.email}`}
            className="group flex items-center justify-center gap-3 rounded-xl border border-neutral-800/60 bg-neutral-900/50 p-4 transition-all hover:border-cyan-500/30 hover:bg-neutral-800/50"
          >
            <FaEnvelope className="text-cyan-400" size={20} />
            <span className="text-neutral-300 transition-colors group-hover:text-white">
              {CONTACT.email}
            </span>
          </a>

          <a
            href={`tel:${CONTACT.phoneNo.replace(/\s/g, "")}`}
            className="group flex items-center justify-center gap-3 rounded-xl border border-neutral-800/60 bg-neutral-900/50 p-4 transition-all hover:border-cyan-500/30 hover:bg-neutral-800/50"
          >
            <FaPhone className="text-cyan-400" size={18} />
            <span className="text-neutral-300 transition-colors group-hover:text-white">
              {CONTACT.phoneNo}
            </span>
          </a>
        </div>

        <div className="mt-8 flex justify-center">
          <ResumeDownload className="btn-secondary" />
        </div>

        <p className="mt-6 text-center text-sm text-neutral-500">
          I typically respond within 24 hours.
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
