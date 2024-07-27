import { motion } from "framer-motion";
import "./hero.scss";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.1 },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: { duration: 2, repeat: Infinity },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: { repeat: Infinity, repeatType: "mirror", duration: 20 },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <div className="headingContainer">
            <motion.h2 variants={textVariants}>SIDDHI MEHTA</motion.h2>
            <motion.h1 variants={textVariants}>Web and App Developer</motion.h1>
          </div>
          <motion.div variants={textVariants} className="buttons">
            <motion.button
              variants={textVariants}
              whileHover={{ backgroundColor: "white", color: "black" }}
              whileTap={{ backgroundColor: "white", color: "black" }}
            >
              <a href="https://drive.google.com/file/d/12EpBQvUalw4DJAHE3k_PXbl6ZOmJtMg2/view?usp=drive_link">
                Resume
              </a>
            </motion.button>
            <motion.button
              variants={textVariants}
              whileHover={{ backgroundColor: "white", color: "black" }}
              whileTap={{ backgroundColor: "white", color: "black" }}
            >
              <a href="mailto:siddhim1609@gmail.com">Contact Me</a>
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
            className="scroll"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Web Developer App Developer
      </motion.div>
      <div className="imageContainer">
        <img src="/myphoto800.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
