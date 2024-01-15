// components/Hero.jsx

import Image from "next/image";
import styles from './hero.module.css'


const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <Image src='/profile.jpeg' className={styles.profileImg} width={300} height={300} alt="Fabian's personal headshot" />
      <div className={styles.heroText}>
        <h1>Hey, I'm Fabian 👋</h1>
        <p>
          I'm a software developer based in Benin, Nigeria. I specialize in building (and occasionally designing)
          exceptional websites, applications, and everything in between.
        </p>
        <div className={styles.socialIcons}>
          <a
            href="https://twitter.com/olawanle_joel"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://github.com/olawanlejoel"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/olawanlejoel/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero;