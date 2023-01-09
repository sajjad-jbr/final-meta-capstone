import React from 'react';
import logo from '../Assets/images/svg/Logo.svg'
import Nav from "./Nav";
function Header(props) {
    return (
        <header className="little-lemon-header">
            <img src={logo} alt="little lemon logo" />
            <Nav/>
        </header>
    );
}

export default Header;
