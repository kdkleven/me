import React from "react";
import { Image } from 'react-bootstrap'
import './style.css'
import Headshot from '../../assets/images/headshot.jpg'

function About() {
  return (
    <div className="body">
        <h1 className="font-weight-light">About</h1>        
        <Image id="headshot" src={Headshot} alt="headshot" roundedCircle />    
        <p id="about-body">
            To a mind that is still, the universe surrenders.
            </p>
        </div>
  );
}

export default About;