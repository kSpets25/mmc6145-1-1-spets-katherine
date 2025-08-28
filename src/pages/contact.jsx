import styles from '../styles/contact.module.css'


export default function Contact() {
  return (
   
    <main className={styles.contactMain}>
        <>
        <h1 className={styles.contactText}>Let's Get In Touch</h1>
        </>
        <section className='sectionContact'>
        <h3>I'm looking for work!</h3>
        <h3>If you'd like to get in touch with me:</h3>
        <h4>email: k.spets@ufl.edu</h4>
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