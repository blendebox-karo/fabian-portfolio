// components/Footer.jsx
import styles from './footer.module.css'

const Footer = () => {
    return (
      <>
        <hr className={styles.hr}/>
        <div className={styles.footerContainer}>
          <p>
            © {new Date().getFullYear()} Fabian's Portfolio
          </p>
          <div className="socialIcons">
            <a
              href="/"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a
              href="https://github.com/blendebox-karo"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/karo-anaro-383b92175/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </>
    )
  }
  
  export default Footer;