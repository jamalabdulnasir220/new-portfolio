import { FaGithub, FaLinkedin } from "react-icons/fa";
// import logo from '../assets/logo.png'


const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* <img className='mx-2 w-50 h-20' src={logo} alt="logo" /> */}
      </div>
      <div className="m-8 flex justify-center items-center gap-4 text-2xl">
        <FaLinkedin
          className="cursor-pointer"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/jamalabdulnasir/",
              "_target"
            )
          }
        />
        <FaGithub  className="cursor-pointer"
          onClick={() =>
            window.open(
              "https://github.com/jamalabdulnasir220",
              "_target"
            )
          }/>
      </div>
    </nav>
  );
};

export default Navbar;
