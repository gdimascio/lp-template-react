import React from "react";
import { NavLink } from "react-router-dom";



const Logo = () => {
    return(
        <div className="logo">
            <NavLink to={"/"}>
                <img src="/img/logo.png" className="logo" alt="logo"/>
            </NavLink>
            <p>TITLE</p>
        </div>
    )
}

export default Logo;