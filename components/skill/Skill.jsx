// components/Skills.jsx
import styles from './skill.module.css'

const Skills = () => {
    return (
      <div className={styles.skillsContainer}>
        <h2>Skills</h2>
        <div className={styles.gridSkills}>
          <div className={styles.skillCard}>
            
            <p className={styles.html}>HTML</p>
          </div>
          <div className={styles.skillCard}>
            
            <p>CSS</p>
          </div>
          <div className={styles.skillCard}>
            
            <p>JavaScript</p>
          </div>
          <div className={styles.skillCard}>
            
            <p>React</p>
          </div>
          <div className={styles.skillCard}>
            
            <p>Node</p>
          </div>
          <div className={styles.skillCard}>
            
            <p>Python</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default Skills;
  