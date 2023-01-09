import React from 'react';

const menus = [
    {id: 1, title: 'Home', link: 'home'},
    {id: 2, title: 'About', link: 'about'},
    {id: 3, title: 'Menu', link: 'menu'},
    {id: 4, title: 'Reservations', link: 'reservations'},
    {id: 5, title: 'Order Online', link: 'order-online'},
    {id: 6, title: 'Login', link: 'login'},
]

function Nav(props) {
    return (
        <nav className="little-lemon-navbar">
            <ul className="list-menu">
                {
                    menus.map(item => <li className="list-item h-space-item d-inline" key={item.id}>
                    <a className="link" href={item.link}>
                        {item.title}
                    </a>
                </li>)
                }
            </ul>
        </nav>
    );
}

export default Nav;
