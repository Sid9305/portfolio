import "./skills.scss";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import data from "./skilldata.jsx";

const Skills = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <div className="Skills">
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {data.map((d, index) => (
            <motion.div className="item" key={index}>
              <div className="icon">{d.icon}</div>
              <h3>{d.name}</h3>
              <div className="skillList">
                {d.skills.map((skill, i) => (
                  <button key={i}>{skill}</button>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
