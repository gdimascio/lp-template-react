import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <div className="navbar">
            <ul>
                <li><p><NavLink to={"#"}>HOME</NavLink></p></li>
                <li><p><NavLink to={"#about"}>ABOUT US</NavLink></p></li>
                <li><p><NavLink to={"#tech"}>TECHNOLOGY</NavLink></p></li>
                <li><p><NavLink to={"#contact"}>CONTACT</NavLink></p></li>
                
            </ul>
        </div>
    )
}

export default Navbar;


