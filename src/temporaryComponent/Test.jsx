import { motion } from "framer-motion";
import './text.scss'

const Test = () => {
  

  const variants = {
    visible: (i) => ({
      opacity: 1,
      x: 100,
      transition: { delay: i * 0.1 },
    }),
    hidden : {opacity:0}
  };

  const items = ["a", "b", "c", "d", "e"];
  return (
    <div className="course">
      {/* <motion.div
        className="box"
        initial={{ scale: 0.5 }}
        transition={{ duration: 1 }}
        whileHover={{
          opacity: 1,
          scale: 1,
          rotate: 180,
          //   x: 200,
        }}
        drag
      ></motion.div> */}

      <motion.ul initial="hidden" animate="visible" variants={variants}>
        {items.map((item,index)=>{
            return <motion.li variants={variants} key={item} custom={index}>
                {item}
            </motion.li>
        })}
      </motion.ul>
    </div>
  );
};

export default Test;
