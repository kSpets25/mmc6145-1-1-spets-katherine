import React from 'react';
import './Butterfly.css';
import butterflyImage from './assets/butterflyImage.png'; // Make sure you have a butterfly.png image in the same directory

const Butterfly = () => {
  return (
    <div className="butterfly-container">
      <img src={butterflyImage} alt="A moving butterfly" className="butterfly" />
    </div>
   
  );
};

export default Butterfly;