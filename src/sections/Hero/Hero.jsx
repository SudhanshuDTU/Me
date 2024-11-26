import React from "react";
import styles from "./HeroStyles.module.css";
import themeIcon from "../../assets/sun.svg";
import heroImg from "../../assets/cropped_image.png";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import instagram from "../../assets/instagram-svgrepo-com.svg"
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import CV from "../../assets/Sudhanshu_DTU_Resume.pdf";
import { useTheme } from "../../contextApi/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img src={heroImg} className={styles.hero} alt="Profile Image" />
        <img
          src={themeIcon}
          className={styles.colorMode}
          alt="Color made icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>Sudhanshu Jha </h1>
       
         <h2>Mobile App Developer</h2>
        
        <span>
          <a href="https://github.com/SudhanshuDTU" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/sudhanshu-dtu/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href="https://x.com/Sudhanshu_dtu" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://www.instagram.com/sudhanshu_1902/" target="_blank">
            <img src={instagram} alt="Instagram icon" />
          </a>
        </span>
        <p className={styles.description}>
         Crafting innovative and high-performance React Native apps to empower businesses.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
