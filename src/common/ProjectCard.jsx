import styles from './ProjectCardStyles.module.css';
import TiltedCard from './TiltedCard';

function ProjectCard({ src, link, h3, p }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
    >
      <div className={styles.imageWrapper}>
        <TiltedCard
          imageSrc={src}
          altText={`${h3} project`}
          captionText={h3}
          containerHeight="100%"
          containerWidth="100%"
          imageHeight="100%"
          imageWidth="100%"
          rotateAmplitude={12}
          scaleOnHover={1.08}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={false}
        />
      </div>
      <div className={styles.info}>
        <h3>{h3}</h3>
        <p>{p}</p>
      </div>
      <div className={styles.arrow}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
      </div>
    </a>
  );
}

export default ProjectCard;