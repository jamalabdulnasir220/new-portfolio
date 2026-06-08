import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-neutral-800/60 py-10">
      <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-neutral-500">
          &copy; {new Date().getFullYear()} Abdul Nasir Jamal. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/jamalabdulnasir/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-neutral-400 transition-colors hover:text-cyan-400"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/jamalabdulnasir220"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-neutral-400 transition-colors hover:text-cyan-400"
          >
            <FaGithub size={20} />
          </a>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-700 text-neutral-400 transition-all hover:border-cyan-500/50 hover:text-cyan-400"
          >
            <FaArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
