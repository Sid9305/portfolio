import "./skills.scss";
import { animate, motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import data from "./skilldata.jsx";

const Skills = () => {
  const [position, setPosition] = useState(0);
  const [paused, setPaused] = useState(false);
  const [width, setWidth] = useState(0);
  const carousel = useRef(null);

  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  });

  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",
      transition: { repeat: Infinity, repeatType: "mirror", duration: 20 },
    },
    paused: {
      x: (custom) => custom,
      transition: { duration: 0 },
    },
  };

  return (
    <>
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
            {data.map((d, index) => {
              return (
                <motion.div
                  className="item"
                  key={index}
                  variants={sliderVariants}
                  initial={paused ? "paused" : "initial"}
                  animate={paused ? "paused" : "animate"}
                  whileTap={() => {
                    setPosition(carousel.current.scrollLeft);
                    setPaused((prev) => !prev);
                  }}
                  custom={position}
                >
                  {/* <img src={d.icon} alt="" className="icon"/> */}
                  <div className="icon">{d.icon}</div>
                  <h3>{d.name}</h3>
                  <div className="skillList">
                    {d.skills.map((skill, i) => (
                      <button key={i}>{skill}</button>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Skills;
