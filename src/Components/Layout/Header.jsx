import React from 'react';
import logo from '../Assets/images/svg/Logo.svg'
import Nav from "./Nav";
import NavMobileMode from "./NavMobileMode";

function Header(props) {
    return (
        <header className="little-lemon-header">
            <div>
                <img src={logo} alt="little lemon logo"/>
                <Nav/>
            </div>
            <NavMobileMode/>
        </header>
    );
}

export default Header;
