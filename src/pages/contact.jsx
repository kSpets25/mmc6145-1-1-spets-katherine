import styles from '../styles/contact.module.css'

export default function Contact() {
  return (
    <main className={styles.contactMain}>
      <h1 className={styles.contactPage}>Contact Me!</h1>
      <p>Connect with me on{' '}
          <br></br>
          <a
            href="https://www.linkedin.com/in/katherine-spets-640064234"
            target="_blank"
            rel="nonopener noreferrer"
          >
            LinkedIn
          </a>
          <br></br>
          <a
            href="https://https://github.com/kSpets25"
            target="_blank"
            rel="nonopener noreferrer"
          >
            Github
          </a>
          .
      </p>
      
    </main>
  )
}