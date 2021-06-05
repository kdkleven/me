import React from "react";
import { Image } from 'react-bootstrap';
import Enso from '../../assets/images/enso.jpg'

function Home() {
  return (
    <div className="body">
        <h1 className="font-weight-light">Welcome to Kyle's Portfolio</h1>        
        <Image id="enso" src={Enso} alt="welcome" roundedCircle />
        </div>
  );
}

export default Home;