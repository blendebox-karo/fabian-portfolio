// components/Navbar.jsx

import Link from "next/link";
import styles from "./navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/" className={styles.title}>
          Fabian's Portfolio
        </Link>
      </div>
      <a href="/fabianjay.pdf" className={styles.ctaBtn} download="fabian">Resume</a>
    </div>
  )
}

export default Navbar;