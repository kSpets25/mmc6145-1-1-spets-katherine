import styles from '../styles/about.module.css';
import { Link } from 'react-router-dom'

function Button() {
  return (
    <Link to="/contact">
      <button className='button' style={{backgroundColor:'blue', color: 'white', padding:'10px 20px', borderRadieus: '5px'}}>Contact Me</button>
    </Link>
  )
}

export default function About() {
  return ( 
    
    <main className={styles.aboutMain}>
      <>
      <h1 className={styles.aboutMe}> About Me!</h1>
      </>
      <section className={styles.sectionAbout}>
        <p className={styles.aboutText}>The Reason I Love Web Design</p>

            <p>Growing up on a farm in a small-town community, I valued nature, family, community and above all learning about everything! In high school my counselor told me I would never be accepted into college.  For anyone that has faced those words, “you can’t”, the fire lit inside me. Since then, not only did I get into college, but I have graduated with not one but four educational degrees.</p> 
            
            <p>After earning my associates degree, I continued learning and became a Respiratory Therapist, completed a Bachelor of Business Administration degree, and finally my Master of Mass Communication degree with a concentration in Web Design</p>
            
            <p>Web design offers me a platform to combine all my learning experience, and the opportunity to continue learning because it is always evolving.  New design trends, tools, and technologies (like responsive design, accessibility standards, and UX/UI best practices) emerge frequently. This environment keeps me engaged and growing continuously. I am passionate about web design because it feeds my curiosity and rewards adaptability and exploration.</p>
           
            <p>Great web design isn’t just about aesthetics; it’s about understanding users and what they need, how they think, and how they interact with digital spaces. This is invaluable when translating goals into effective digital experiences. My diverse background helps me design for different audiences and helps me create inclusive and user-friendly website designs.</p>
           
            <p>Take a look at my projects and see first hand the successes and challenges I have experienced. </p>
           
            <Button />

      </section>

    </main>
  )
}