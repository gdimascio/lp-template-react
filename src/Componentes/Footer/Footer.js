import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = (props) => {
    return(
        <footer>
            <div className="footer">
                <div className="footer-contact">
                    <div className="contact-title">
                        <img src="./img/logo.png" alt="logo" />
                        <p>TITLE</p>
                    </div>
                    <div className="conact-info">
                        <p>+54 9 (11) 5577 3362</p>
                        <p>guido.dimascio@gmail.com</p>
                    </div>
                    <div className="contact-social">
                        <a href="https://www.linkedin.com/in/guidodimascio/"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a href="https://github.com/gdimascio"><FontAwesomeIcon icon={faGithub} /></a>
                    </div>
                </div>

                <div className="footer-nav">
                    <a href="#">Home</a>
                    <a href="#about">About Us</a>
                    <a href="#tech">Technology</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
