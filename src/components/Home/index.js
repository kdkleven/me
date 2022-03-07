import React from "react";
import { Image } from 'react-bootstrap';
import Enso from '../../assets/images/enso.jpg'
import './style.css';

function Home() {
  return (
    <div className="body">
        <Image id="enso" src={Enso} alt="welcome" roundedCircle />
        </div>
  );
}

export default Home;