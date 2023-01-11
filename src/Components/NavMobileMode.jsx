import React from 'react';
import ListMenu from "./ListMenu";
const menus = [
    {id: 1, title: 'Home', link: 'home'},
    {id: 2, title: 'About', link: 'about'},
    {id: 3, title: 'Menu', link: 'menu'},
    {id: 4, title: 'Reservations', link: 'reservations'},
    {id: 5, title: 'Order Online', link: 'order-online'},
    {id: 6, title: 'Login', link: 'login'},
]
function NavMobileMode(props) {
    return (
        <nav id="navbar-mobile-mode-container">
            <ListMenu className="h-space-item d-inline"/>
        </nav>
    );
}

export default NavMobileMode;
