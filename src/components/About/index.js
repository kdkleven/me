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
            I am a highly motivated engineer with over 15 years of experience testing of complex software applications across multiple industries. My project work ranges from highly configurable web-based platforms to massively popular video games, including multiple titles in the Call of Duty franchise.
            <br></br><br></br>
            As a freelance Full-Stack Software Developer, I have experience in HTML, CSS, Javascript, NodeJS, Express, React, MongoDB, Bootstrap, Axios, Ajax, jMeter, Chartjs, first and third-party APIs, indexedDB, MySQL, Handlebars, Mongoose, Sequelize.
            </p>
        </div>
  );
}

export default About;