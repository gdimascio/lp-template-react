import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function burger_menu(){
    var x = document.getElementById("_burger-links");
    if (x.style.transform === "translateX(0px)") {
        x.style.transform = "translateX(100%)";
    } else {
        x.style.transform = "translateX(0px)";
    }
}


const BurgerMenu = () => {
    return(
        <div className="burger-menu">
            <span onClick={burger_menu}><FontAwesomeIcon icon={faBars} /></span>
        </div>
    )
}

export default BurgerMenu;



