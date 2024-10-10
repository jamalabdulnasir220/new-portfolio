import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import logo from '../assets/kevinRushLogo.png'
import { FaSquareXTwitter } from 'react-icons/fa6'

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className='mx-2 w-10' src={logo} alt="logo" />
      </div>
      <div className='m-8 flex justify-center items-center gap-4 text-2xl'>
        <FaLinkedin />
        <FaGithub />
        <FaSquareXTwitter />
        <FaInstagram />
      </div>
    </nav>
  )
}

export default Navbar
