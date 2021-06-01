import React from "react";
import { Image } from 'react-bootstrap'

function About() {
  return (
    <div className="body">
        <h1 className="font-weight-light">Welcome</h1>        
        <Image id="headshot" src="/img/favicon.ico" alt="headshot" roundedCircle />
        </div>
  );
}

export default About;