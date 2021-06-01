import React from "react";
import { Image } from 'react-bootstrap'

function Home() {
  return (
    <div className="body">
        <h1 className="font-weight-light">Welcome</h1>        
        <Image id="welcome" src="./img/enso.jpg" alt="welcome" roundedCircle />
        </div>
  );
}

export default Home;