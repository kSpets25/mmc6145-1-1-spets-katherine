//src/components/footer.jsx

import React from 'react';


const currentYear = new Date().getFullYear();

export default function Footer() {
    return (
       
        <footer className='footer'>
            <p>&copy; Katherine Spets {currentYear}</p>
        </footer>
    );
};

