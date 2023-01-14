import React from 'react';
import {Link, Outlet} from "react-router-dom";

const menus = [
    {id: 1, title: 'Home', link: 'home'},
    {id: 2, title: 'About', link: 'about'},
    {id: 3, title: 'Menu', link: 'menu'},
    {id: 4, title: 'Reservations', link: 'reservations'},
    {id: 5, title: 'Order Online', link: 'order-online'},
    {id: 6, title: 'Login', link: 'login'},
]

function ListMenu({className = "", extraItem = "", ...props}) {
    return (
        <>
            <ul className="list-menu">
                {extraItem}
                {
                    menus.map(item => <li className={`list-item ${className}`} key={item.id}>
                        <Link className="link" to={item.link}>
                            {item.title}
                        </Link>
                    </li>)
                }
            </ul>
            <Outlet/>
        </>
    );
}

export default ListMenu;
