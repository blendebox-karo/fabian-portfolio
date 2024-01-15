// components/Projects.jsx

import Image from 'next/image';
import { projectData } from '../../src/api/data';
import styles from './project.module.css'
import Link from 'next/link';

const Projects = () => {
  return (
    <div className={styles.projectContainer}>
      <h2>Projects</h2>
      <div className={styles.projectGrid}>
        {projectData && projectData.map((project) => (
          <Link href={project.gitHubLink}>
            <div className={styles.projectCard} key={project.id}>
              <div className={styles.projectHeader}>
                  <Image src="/folder.png" className={styles.folderIcon} width={30} height={30}/>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </Link>
        ))
        }
      </div>
    </div>
  )
}

export default Projects;