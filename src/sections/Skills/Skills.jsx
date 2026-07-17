import { motion } from 'framer-motion';
import styles from './SkillsStyles.module.css';
import LogoLoop from '../../common/LogoLoop';
import { 
  SiReact, 
  SiJavascript, 
  SiTailwindcss, 
  SiHtml5, 
  SiCss, 
  SiRedux, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiJsonwebtokens, 
  SiWordpress, 
  SiShopify, 
  SiGit, 
  SiGithub, 
  SiVite, 
  SiDocker 
} from 'react-icons/si';
import { TbApi } from "react-icons/tb";

const skillCategories = [
  {
    title: 'Frontend',
    direction: 'left',
    speed: 30,
    skills: [
      { name: 'React.js', icon: <SiReact color="#61DAFB" /> },
      { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss color="#06B6D4" /> },
      { name: 'HTML5', icon: <SiHtml5 color="#E34F26" /> },
      { name: 'CSS3', icon: <SiCss color="#1572B6" /> },
      { name: 'Redux/Zustand', icon: <SiRedux color="#764ABC" /> },
    ]
  },
  {
    title: 'Backend & DB',
    direction: 'right',
    speed: 30,
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs color="#339933" /> },
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
      { name: 'REST APIs', icon: <TbApi color="#009688" /> },
      { name: 'JWT Auth', icon: <SiJsonwebtokens /> },
    ]
  },
  {
    title: 'Tools & CMS',
    direction: 'left',
    speed: 30,
    skills: [
      { name: 'WordPress', icon: <SiWordpress color="#21759B" /> },
      { name: 'Shopify', icon: <SiShopify color="#7AB55C" /> },
      { name: 'Git', icon: <SiGit color="#F05032" /> },
      { name: 'GitHub', icon: <SiGithub /> },
      { name: 'Vite', icon: <SiVite color="#646CFF" /> },
      { name: 'Docker', icon: <SiDocker color="#2496ED" /> },
    ]
  }
];

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <motion.h1
        className="sectionTitle"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h1>

      <div className={styles.categoriesWrapper}>
        {skillCategories.map((cat, catIdx) => {
          const logos = cat.skills.map((skill) => ({
            node: (
              <div className={styles.skillCard}>
                <span className={styles.skillIcon}>{skill.icon}</span>
                <span className={styles.skillName}>{skill.name}</span>
              </div>
            ),
            title: skill.name,
          }));

          return (
            <motion.div
              key={cat.title}
              className={styles.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
              style={{ width: '100%', maxWidth: '100vw' }}
            >
              <h3 className={styles.categoryTitle}>{cat.title}</h3>
              <div style={{ width: '100%', overflow: 'hidden' }}>
                <LogoLoop
                  logos={logos}
                  speed={cat.speed}
                  direction={cat.direction}
                  logoHeight={50} 
                  gap={16}
                  hoverSpeed={0}
                  fadeOut={true}
                  scaleOnHover={true}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;