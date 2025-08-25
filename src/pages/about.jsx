import styles from '../styles/about.module.css'
import profilePic from '../assets/profilePicture.jpg'

export default function About() {
  return (
    <main className={styles.aboutMain}>
       <div>
            <img
              src={profilePic} from alt="Katherine Spets" width="200" height="250"
            />
        </div>
      <h1 className={styles.aboutPage}> About Me!</h1>
      <p>Here is some information about me!</p>
     
    </main>
  )
}