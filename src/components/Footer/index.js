import React from 'react';
import './style.css'
//need to add icons

function Footer () {
    return (
        <footer className="footer bg-danger text-light">
            10GU &copy;2021
            <span> || </span>
            <a href="mailto:kylekleven8@gmail.com">kylekleven8@gmail.com</a>
            <span> || </span>
            <a href="tel:612-670-7837">612-670-7837</a>
            <span> || </span>
            <a href="https://www.linkedin.com/in/kdkleven/">LinkedIn</a>
            <span> || </span>
            <a href="https://github.com/kdkleven">GitHub</a>
            <span> || </span>
            <a href="assets/files/kk_Resume.pdf" download>Resume</a>
        </footer>
    )
}

export default Footer;
