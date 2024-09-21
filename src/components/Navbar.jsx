import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
 

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center ">
            <img className="mx-2 w-16" src={logo} alt="logo"/>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/unnativaidya"><FaLinkedin/></a>
        <a href="https://github.com/unnativaidya23"><FaGithub/></a>
        <a href="https://instagram.com/unnativaidya_"><FaInstagram/></a>
          
        </div>
    </nav>
  )
};

export default Navbar