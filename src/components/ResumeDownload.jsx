import { FaDownload } from "react-icons/fa";
import { RESUME } from "../constants";

const ResumeDownload = ({
  className,
  children = "Download Resume",
  showIcon = true,
  onClick,
}) => {
  return (
    <a
      href={RESUME.url}
      download={RESUME.filename}
      className={className}
      onClick={onClick}
    >
      {showIcon && <FaDownload size={14} />}
      {children}
    </a>
  );
};

export default ResumeDownload;
