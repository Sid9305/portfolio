import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  close: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  close: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = ["Home", "Skills", "Project", "Contact"];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.2, fontWeight: "500" }}
          whileTap={{ scale: 0.8, color: "gray", transition: { duration: 2 } }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;