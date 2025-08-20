//src/components/header.jsx
import React from 'react'
import { Link } from 'react-router-dom';


export default function Header() {
    return (
        <header className="header">    
                    <nav className="nav">
                        <div className="nav_logo">
                        <Link to="/"><img src="/images/logo.png" alt="Logo" /></Link> 
                        </div>
                        <ul className="nav_link">
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/project">Projects</Link></li>
                        </ul>
                    </nav>
                    
        </header>
    );
}