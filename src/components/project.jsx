//src/components/project.jsx
import React from 'react'
import styles from '../styles/project.module.css'


export default function Project({title, description, image, url}) {

    return(
        <main className={styles.projectMain}>
            <section className={styles.sectionProject}>
                <div>
                    <h4>
                        <a href={url} 
                            target="_blank" 
                            rel="noopener noreferrer">
                            <h3>{title}</h3>
                        </a>
                        {description} <br></br>
                        <img src={image}></img>
                        
                    </h4>
                </div> 
            </section>
        </main>
    
    );
}



