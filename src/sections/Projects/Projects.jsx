import styles from './ProjectsStyles.module.css';
import Echohive from '../../assets/echohive_logo.png';
import BargainBox from '../../assets/hero.png';
import Magiclist from '../../assets/logo-index.png';
import Meditation from '../../assets/meditation_logo.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Echohive}
          link="https://github.com/SudhanshuDTU/EchoHive"
          h3="Echohive"
          p="Video Streaming App"
        />
        <ProjectCard
          src={BargainBox}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="BargainBox"
          p="Online Marketplace App"
          margin={27}
        />
        <ProjectCard
          src={Magiclist}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="MagicList"
          p="Offline TODO App"
        />
        <ProjectCard
          src={Meditation}
          link="https://github.com/SudhanshuDTU/Meditation_App"
          h3="MindfulBeats"
          p="Meditation App"
        />
      </div>
    </section>
  );
}

export default Projects;