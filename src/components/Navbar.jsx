import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import ResumeDownload from "./ResumeDownload";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => setIsOpen(false);

  return (
    <nav
      className={`sticky top-0 z-50 -mx-8 mb-8 px-8 transition-all duration-300 ${
        scrolled
          ? "border-b border-neutral-800/60 bg-neutral-950/80 py-4 backdrop-blur-lg"
          : "py-6"
      }`}
    >
      <div className="flex items-center justify-between">
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-white transition-colors hover:text-cyan-400"
        >
          ANJ<span className="text-cyan-400">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <ResumeDownload
            className="rounded-lg border border-neutral-700 px-4 py-2 text-sm font-medium text-neutral-200 transition-all hover:border-cyan-500/50 hover:text-cyan-400"
            showIcon={false}
          >
            Resume
          </ResumeDownload>
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
        </div>

        <button
          className="text-neutral-300 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="mt-4 flex flex-col gap-4 border-t border-neutral-800/60 pt-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="text-neutral-300 transition-colors hover:text-cyan-400"
            >
              {link.label}
            </a>
          ))}
          <ResumeDownload
            className="btn-secondary w-fit"
            onClick={handleNavClick}
          />
          <div className="flex gap-4 pt-2">
            <a
              href="https://www.linkedin.com/in/jamalabdulnasir/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-neutral-400 hover:text-cyan-400"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/jamalabdulnasir220"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-neutral-400 hover:text-cyan-400"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
