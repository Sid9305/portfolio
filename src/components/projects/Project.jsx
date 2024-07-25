import { useState } from "react";
import "./project.scss";
import projectData from "./projectdata";
import { motion } from "framer-motion";

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
};

const Project = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <motion.div className="project">
      <motion.div
        className="content"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
              scale: 0.9,
              backgroundColor: project.backgroundColor,
              color: "black",
              border: "black",
            }}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <motion.h3 variants={textVariants}>{project.title}</motion.h3>
            <motion.p variants={textVariants}>{project.description}</motion.p>
            <motion.div className="buttons" variants={textVariants}>
              {project.tech.map((tech, i) => (
                <button
                  key={i}
                  style={{
                    backgroundColor:
                      hovered === index ? "white" : project.backgroundColor,
                  }}
                >
                  {tech}
                </button>
              ))}
            </motion.div>
            <motion.button className="viewbtn">
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
      <button className="viewbtn viewmorebtn">
        <a href="https://github.com/Sid9305/">View More</a>
      </button>
    </motion.div>
  );
};

export default Project;
