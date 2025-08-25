import styles from '../styles/home.module.css'
import Project from "../components/project";
import profilePic from '../assets/profilePicture.jpg'

const projects = [
  { id: 1, title: 'Caddyshack', url:'https://kspets25.github.io/all-about-caddyshack/'},
  { id: 2, title: 'Bike Time Calculator', url:'https://bike-time-training-calc-a7ab8c6645a4.autoidleapp.com/'},
  { id: 3, title: 'Furry Friends', url:'https://krsawyer100.github.io/com6338-10-10-sawyer-spets/'}

]
function MyButton() {
  return (
    <button>
      About Me
    </button>
  );
}

export default function Home() {
  return (

    <main>
            <h1 className={styles.welcome}>Welcome to my portfolio website</h1>
            <h3 className={styles.myName}>Katherine Spets</h3>

            <div>
            <MyButton />
            </div>
            
            {projects.map((project) => (
            <Project
              key={project.id} 
              title={project.title}
              url={project.url}
              description={project.description}
            />
      ))}
    </main>
  );
};