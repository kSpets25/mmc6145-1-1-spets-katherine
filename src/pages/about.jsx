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
        <p className={styles.aboutText}>Designing Ideas into Meaningful Experiences.</p>

            <p>Hi, I'm Katherine Spets, and I recently graduated from the University of Florida. I am a designer with a passion for creating engaging and visually compelling designs. I enjoy turning ideas into visuals that not only look good but also communicate a clear message.</p>

            <p className={styles.aboutText}>What I do</p>
            <p>Web Design</p>
            <p>I create user-focused web experiences with an emphasis on clean layouts, visual hierarchy, responsiveness design, and intuitive navigation.</p>

            <p>Graphic Design</p>

            <p>From digital graphics to print materials, I enjoy exploring typography, color composition, and imagery to create designs that communicate effectively.</p>

            <p>Logo & Branding Design</p>

            <p>I recreated memorable logos and cohesive visual designs that establish a distinct and recognizable presence.</p>

            <p>Marketing Design</p>

            <p>I design promotional materials, social media content, advertisements, and other marketing visuals that help brands and ideas stand out.</p>

            <p className={styles.aboutText}>My Approach</p>

            <p>I believe great design starts with understanding the message behind it.  I approach each project by combining creativity with research, problem-solving, and especially attention to detail. My goal is to create work that feels intentional, and authentic.</p>
            
            <p>Web design offers me a platform to combine all my learning experience, and the opportunity to continue learning because it's always evolving. New design trends, tools, and technologies emerge frequently. This environment keeps me engaged and growing continuously. I am passionate about web design because it feeds my curiosity and rewards adaptability and exploration.</p>
           
            <p className={styles.aboutText}>Look at my projects and see firsthand the successes and challenges I have experienced. </p>
           
            <Button />

      </section>

    </main>
  )
}