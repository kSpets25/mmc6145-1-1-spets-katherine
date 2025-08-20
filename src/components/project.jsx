//src/components/project.jsx
import React from 'react'


export default function Project({projecName}) {
    return(
         <section>
            <h2>Featured Projects</h2>
            <ul>
                <li>
                    <a href="https://kspets25.github.io/all-about-caddyshack/" target="_blank rel=noreferrer"><h4>Caddyshack</h4></a>
                </li>
                
                <li>
                    <a href="https://bike-time-training-calc-a7ab8c6645a4.herokuapp.com/" target="_blank rel=noreferrer"><h4>Bike Time Calculator</h4></a> 
                </li>
                <li>
                    <a href="https://krsawyer100.github.io/com6338-10-10-sawyer-spets/" target="_blank rel=noreferrer"><h4>Furry Friends Pet Adoption</h4></a>
                </li>
            </ul>
         </section>
         
    )
}