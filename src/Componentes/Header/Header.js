import React from "react";

import Logo from './Logo/Logo.js';
import Navbar from './Navbar/Navbar.js';
import BurgerMenu from './BurgerMenu/BurgerMenu.js';
import BurgerLinks from './BurgerLinks/BurgerLinks.js';


const Header = () => {
    return(
        <header>
            <div className="header">
                < Logo />

                < Navbar />

                < BurgerMenu />
            </div>

            < BurgerLinks />

        </header>
    )
}

export default Header;