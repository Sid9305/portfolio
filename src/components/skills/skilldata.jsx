import { IoGlobeOutline } from "react-icons/io5";
import { IoLogoAndroid } from "react-icons/io";
import { LuFileCode2 } from "react-icons/lu";
import { RiRobot3Fill } from "react-icons/ri";
import { FaDatabase } from "react-icons/fa";

const data = [
  {
    name: "Languages",
    icon: <LuFileCode2 />,
    skills: ["C", "C++", "Python", "Java", "Dart", "Solidity"],
  },
  {
    name: "Web Development",
    icon: <IoGlobeOutline />,
    skills: ["HTML", "CSS", "JS", "React JS", "Node JS", "Express JS"],
  },
  {
    name: "Backend and Database",
    icon: <FaDatabase />,
    skills: [
      "MongoDB",
      "FireBase",
      "MySQL",
      "Flask",
      " Django (Basics)",
      "Express JS",
      "Node JS",
    ],
  },
  {
    name: "App Development",
    icon: <IoLogoAndroid />,
    skills: ["Flutter", "Android Studio", "Firebase", "Figma"],
  },
  {
    name: "Machine Learning and Data Science",
    icon: <RiRobot3Fill />,
    skills: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Scikit-Learn",
      "OpenCV",
      "Streamlit",
    ],
  },
];

export default data;
