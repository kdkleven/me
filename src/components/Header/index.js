import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap'
import "./style.css"

function Header(props) {
    return (
        <Navbar className="header bg-danger text-white">
            
            <Navbar.Toggle arai-controls="basic-navbar-nav" />
            <Nav className="m-auto">
                <Navbar.Collapse>
                    <ul className="navbar-nav container-fluid ml-auto">
                        <li
                            className={`nav-item  ${props.location.pathname === "/about" ? "active" : ""
                                }`}
                        >
                            <Link className="nav-link head-nav" to="/about">
                                About
                            </Link>
                        </li>
                        <li
                            className={`nav-item  ${props.location.pathname === "/portfolio" ? "active" : ""
                                }`}
                        >
                            <Link className="nav-link head-nav" to="/portfolio">
                                Portfolio
                            </Link>
                        </li>
                        </ul>
                        <Navbar.Brand className="navbar-brand">
                <Link className="nav-item container-fluid m-auto brand-name" to="/">
                    Kyle Kleven
                </Link>
            </Navbar.Brand>
                        <ul className="navbar-nav container-fluid mr-auto">
                        <li
                            className={`nav-item  ${props.location.pathname === "/" ? "active" : ""
                                }`}
                        >
                            <Link className="nav-link head-nav" to="/">
                                Inspiration
                            </Link>
                        </li>
                        <li
                            className={`nav-item  ${props.location.pathname === "/contact" ? "active" : ""
                                }`}
                        >
                            <Link className="nav-link head-nav" to="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </Navbar.Collapse>
            </Nav>
        </Navbar>
    )
}

export default withRouter(Header);