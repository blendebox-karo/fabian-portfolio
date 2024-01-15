import Image from 'next/image'
import styles from './page.module.css'
import Head from 'next/head'
import Hero from '../../components/hero/Hero'
import About from '../../components/about/About'
import Skills from '../../components/skill/Skill'
import Projects from '../../components/project/Project'
import Contact from '../../components/contact/Contact'

export default function Home() {
  return (
    <main>
      <Head>
        <title>Fabian's Portfolio</title>
        <meta name="description" content="Fabian's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  )
}
