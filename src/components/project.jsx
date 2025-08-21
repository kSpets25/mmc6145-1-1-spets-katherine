//src/components/project.jsx
import React from 'react'

export default function Project({title, url}) {
    
    return(
        <div className="project">
        <a href={url} 
            target="_blank" 
            rel="noopener noreferrer">
            <h2>{title}</h2>
        </a>
        </div>
        
    );
}



