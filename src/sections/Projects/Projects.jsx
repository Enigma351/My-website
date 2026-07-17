import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ProjectsStyles.module.css';
import SpecularButton from '../../common/SpecularButton';
import usetooImg from '../../assets/usetoo.png';
import flixnestImg from '../../assets/flixnest.png';
import excelsiorImg from '../../assets/excelsior.png';
import moptroImg from '../../assets/moptro.png';
import financeImg from '../../assets/finance.png';
import portfolioImg from '../../assets/portfolio.png';
import listifyImg from '../../assets/listify.png';
import ProjectCard from '../../common/ProjectCard';

const projects = [
  { src: usetooImg, link: 'https://usetoo-admin.vercel.app/', h3: 'Usetoo Logistics', p: 'Production Logistics Dashboard' },
  { src: flixnestImg, link: 'https://flixnest-rouge.vercel.app/', h3: 'FlixNest', p: 'React Movie Discovery App' },
  { src: excelsiorImg, link: 'https://www.excelsioredge.com/', h3: 'Excelsior Edge', p: 'Corporate Business Website' },
  { src: moptroImg, link: 'https://moptro-dashboard-three.vercel.app/', h3: 'Moptro EV', p: 'Full-Stack Fleet Dashboard' },
  { src: financeImg, link: 'https://finance-dashboard-ui-delta-ten.vercel.app/', h3: 'Finance Dashboard', p: 'Analytics & Visualization' },
  { src: portfolioImg, link: 'https://portfolio-ai-mocha-three.vercel.app/', h3: 'Portfolio Site', p: 'Minimal Developer Portfolio' },
  { src: listifyImg, link: 'https://listify-app-8nvd.vercel.app/', h3: 'Listify App', p: 'Task Management App' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className={styles.container}>
      <motion.h1
        className="sectionTitle"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h1>

      <motion.div
        className={styles.projectsGrid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        <AnimatePresence>
          {visibleProjects.map((project, i) => (
            <motion.div
              key={project.h3}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              layout
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <motion.div
        className={styles.loadMoreWrapper}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <SpecularButton
          onClick={() => setShowAll(!showAll)}
          className={styles.loadMoreBtn}
          size="lg"
          radius={14}
          tint="#7c3aed"
          tintOpacity={0.2}
          textColor="#ffffff"
          lineColor="#06b6d4"
          baseColor="#7c3aed"
          intensity={1.2}
        >
          {showAll ? 'Show Less' : 'Load More Projects'}
        </SpecularButton>
      </motion.div>
    </section>
  );
}

export default Projects;