import styles from "./SkillsStyles.module.css";
import { useTheme } from "../../contextApi/ThemeContext";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import { SiMongodb, SiRedux, SiTypescript } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb"; // React Native icon from react-icons
import { AiOutlineApi } from "react-icons/ai"; // API icon for Context API
import SkillList from "../../common/SkillList";

function Skills() {
  const { theme } = useTheme();
 
  const techStack = [
    { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
    { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
    { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
    { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
    { name: "React Native", icon: <TbBrandReactNative color="#61DAFB" /> },
    { name: "React Js", icon: <FaReact color="#61DAFB" /> },
    { name: "Redux", icon: <SiRedux color="#764ABC" /> },
    { name: "Context API", icon: <AiOutlineApi color="#4CAF50" /> },
    { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
    { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },

    { name: "SQL", icon: <FaDatabase color="#003B57" /> },
    {
      name: "Appwrite",
      icon: (
        <img
          src="/logo.svg"
          alt="Appwrite"
          className={styles.customIcon}
        />
      ),
    },
  ];

  return (
    <>
    <section id="skills" className={styles.container}>
    <h1 className="sectionTitle">Skills</h1>
    <div className={styles.skillList}>
      {techStack.map((tech, index) => (
        <div key={index} className={styles.skillCard}>
          <div className={styles.skillIcon}>{tech.icon}</div>
          <div className={styles.skillName}>{tech.name}</div>
        </div>
      ))}
    </div>
    </section>
    </>
  );
}

export default Skills;
