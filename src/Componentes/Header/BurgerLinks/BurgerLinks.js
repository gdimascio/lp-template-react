import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function burger_menu(){
    var x = document.getElementById("_burger-links");
    if (x.style.transform === "translateX(0px)") {
        x.style.transform = "translateX(100%)";
    } else {
        x.style.transform = "translateX(0px)";
    }
}


const BurgerLinks = () => {
    return(
        <div className="burger-links" id="_burger-links" >
            <button className="burger-menu" onClick={burger_menu}><FontAwesomeIcon icon={faXmark}/></button>
            <ul>
                <li><a href="#" onClick={burger_menu}>HOME</a></li>
                <li><a href="#about" onClick={burger_menu}>ABOUT US</a></li>
                <li><a href="#tech" onClick={burger_menu}>TECHNOLOGY</a></li>
                <li><a href="#contact" onClick={burger_menu}>CONTACTO</a></li>
            </ul>
        </div>
    )
}

export default BurgerLinks;

