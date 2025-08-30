import React from 'react';
import styles from '../styles/home.module.css';
import Project from "../components/project";
import proPic from '../assets/profilePicture.jpg';
import star from '../assets/starBlue.png';
import { Link } from 'react-router-dom'

const projects = [
  { id: 1, title: 'Caddyshack', 
    description: 'First class Website as project lead',
    image: star, url:'https://kspets25.github.io/all-about-caddyshack/'},

  { id: 2, title: 'Bike Time Calculator',
    description: 'First website using Javascript', 
    url:'https://bike-time-training-calc-a7ab8c6645a4.autoidleapp.com/'},

  { id: 3, title: 'Furry Friends',
    description: 'First major collaboration project', 
    url:'https://krsawyer100.github.io/com6338-10-10-sawyer-spets/'}
]

 export function Button() {
  return (
    <Link to="/about">
      <button className='button' style={{backgroundColor:'blue', color: 'white', padding:'10px 20px', borderRadieus: '5px'}}>About Me</button>
    </Link>
  )
}

export default function Home() {
  return (

    <main className={styles.homeMain}>
      
        <section className={styles.sectionHome}>  
            <div>
              <img className={styles.proPic}
                src={proPic} from alt="katherine spets" 
                />
              <h1 className={styles.myName}>Katherine Spets</h1>
              <h1 className={styles.welcome}>Welcome to my portfolio website</h1>
            </div>
            <div className='button'>
               <Button />
            </div>
        </section>
        <><h2 className={styles.projectTitle}>My Projects</h2></>
       
              {projects.map((project) => (
              <Project
                key={project.id} 
                title={project.title}
                url={project.url}
                description={project.description}
                image={project.image}
              />
                
        ))}
    </main>
  );
};

