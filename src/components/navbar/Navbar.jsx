import "./navbar.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.25 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{duration:1}}
        >
          Siddhi Mehta
        </motion.span>
        <div className="social">
          <a href="https://github.com/Sid9305">
            <FaGithub className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/siddhi-mehta-228048298/">
            <FaLinkedin className="icon" />
          </a>
          <a href="#">
            <IoLogoWhatsapp className="icon" />
          </a>
          {/* <a href="#"><img src="/youtube.png" alt="ln" /></a> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
