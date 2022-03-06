import React from 'react';
import './style.css'
//need to add icons

function Footer () {
    return (
        <footer className="footer bg-danger text-light">
            KK10GU &copy;2022
            <span> || </span>
            <a href="https://www.linkedin.com/in/kdkleven/">LinkedIn</a>
            <span> || </span>
            <a href="https://github.com/kdkleven">GitHub</a>
            <span> || </span>
            <a href="kk_Resume.pdf" download>Resume</a>
        </footer>
    )
}

export default Footer;
