import styles from '../styles/contact.module.css'


export default function Contact() {
  return (
   
    <main className={styles.contactMain}>
        <>
        <h1 className={styles.contactText}>Let's Get In Touch</h1>
        </>
      <section className={styles.sectionContact}>
        <h2>I'm looking for work!</h2>
        <h4 className={styles.contactMe}>If you'd like to get in touch with me: <br></br>
        kspets@ufl.edu</h4>
        <h4>You can also contact me here as well: {' '}
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
              href="https://github.com/kSpets25"
              target="_blank"
              rel="nonopener noreferrer"
            >
              Github
            </a>
        </h4>
      </section>
    </main>
  
  )
}