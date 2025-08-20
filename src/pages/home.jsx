import styles from '../styles/home.module.css'
import Project from "../components/project";

export default function Home() {
  return (
    <main>
      <h1 className={styles.placeholder}>Welcome to my portfolio website</h1>
      <h1 className={styles.placeholder}>Katherine Spets</h1>
      <Project />
    </main>
  )
}