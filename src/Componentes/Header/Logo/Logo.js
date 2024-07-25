import React from "react";
import { NavLink } from "react-router-dom";

const logoImg = "/img/logo.png";

const Logo = () => {
    return(
        <div className="logo">
            <NavLink to={"/"}>
                <img src={logoImg} className="logo" alt="logo"/>
            </NavLink>
            <p>TITLE</p>
        </div>
    )
}

export default Logo;