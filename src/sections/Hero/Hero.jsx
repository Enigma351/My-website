import heroImg from '../../assets/hero-img.png'
import styles from './HeroStyles.module.css'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {
  const { theme, toggleTheme } = useTheme()
  const themeIcon = theme ==='light' ? sun : moon;
  const twitterIcon = theme ==='light' ? twitterLight : twitterDark;
  const githubIcon = theme ==='light' ? githubLight : githubDark;
  const linkedinIcon = theme ==='light' ? linkedinLight : linkedinDark;


  return <section id="hero" className={styles.container}>
 <div className={styles.colorModeContainer}>
  <img className={styles.hero} 
  src={heroImg} 
  alt="Profile Picture of Partha Sen"
  />
  <img
  className={styles.colorMode} 
  src={themeIcon} alt="color mode icon"
  onClick={toggleTheme}
  />
  </div>
  <div className={styles.info}>
    <h1>
      Partha 
      <br/>
      Sen
    </h1>
    <h2>Frontend/Backend Developer</h2>
    <span>
      <a href="https://x.com/EnigmaCodes15" target="_blank">
      <img src={twitterIcon} alt='Twitter Icon'/>
      </a>
      <a href="https://github.com/Enigma351" target="_blank">
      <img src={githubIcon} alt='Github Icon'/>
      </a>
      <a href="https://www.linkedin.com/in/partha-sen-1793822b0/" target="_blank">
      <img src={linkedinIcon} alt='Linkedin Icon'/>
      </a>
      </span>
      <p className={styles.description}>Passionate about developing modern web experiences with JavaScript, CSS, and React.</p>
      <a href={CV} download>
        <button className='hover' >
          Resume
        </button>
      </a>
  </div>
  </section>
  
  
}

export default Hero