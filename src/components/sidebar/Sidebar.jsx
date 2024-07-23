import { useState } from "react";
import { delay, motion } from "framer-motion";
import Links from "./links/Links";
import "./sidebar.scss";
import ToggleButton from "./togglebutton/ToggleButton";

// Define the animation variants for the sidebar.
const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px )",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  close: {
    clipPath: "circle(25px at 50px 50px)",
    transition: {
      // delay:0.1,
      type: "spring",
      stifness: 400, //instead of duration
      damping: 40,
    },
  },
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="sidebar" animate={open ? "open" : "close"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
