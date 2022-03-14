import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap'
import './style.css'
//need to add icons

function Footer () {
    return (
        <Navbar className="footer bg-danger text-white">
        <Navbar.Toggle arai-controls="basic-navbar-nav" />
            <Nav className="m-auto">
                <Navbar.Collapse>
        <ul className="navbar-nav container-fluid mr-auto">
            <li>
            <a className="foot-nav" href="https://www.linkedin.com/in/kdkleven/">LinkedIn</a>
            </li>
            <li>
            <a className="foot-nav" href="https://github.com/kdkleven">GitHub</a>    
            </li>
            <li>
            <a className="foot-nav" href="kk_Resume.pdf" download>Resume</a>    
            </li>
        </ul>
        </Navbar.Collapse>
        </Nav>
        </Navbar>
    )
}

export default Footer;
