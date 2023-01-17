import React, {useEffect, useState} from 'react';
import icon_ham from '../../Assets/images/svg/icon _hamburger menu.svg'
import closeIcon from '../../Assets/images/svg/x-symbol-svgrepo-com.svg'
import ListMenu from "./ListMenu";

const menus = [
    {id: 1, title: 'Home', link: 'home'},
    {id: 2, title: 'About', link: 'about'},
    {id: 3, title: 'Menu', link: 'menu'},
    {id: 4, title: 'Reservations', link: 'reservations'},
    {id: 5, title: 'Order Online', link: 'order-online'},
    {id: 6, title: 'Login', link: 'login'},
]

function Nav(props) {

    useEffect(() => {
        window.addEventListener('resize', (e) => {
            if (e.currentTarget.innerWidth > 768) {
                let navMobile = document.querySelector('#navbar-mobile-mode-container')
                navMobile.classList.replace('show', 'hide')
                if (statusMobileMenu !== true)
                    setStatusMobileMenu(true)

            }
        })
    }, []);


    const [statusMobileMenu, setStatusMobileMenu] = useState(true);
    const handleNavMobileMode = () => {
        let navMobile = document.querySelector('#navbar-mobile-mode-container')
        if (navMobile.classList.toString().includes('hide') || navMobile.classList.toString().length === 0) {
            navMobile.classList.remove('hide')
            navMobile.classList.add('show')
            setStatusMobileMenu(false)
        } else {
            navMobile.classList.remove('show')
            navMobile.classList.add('hide')
            setStatusMobileMenu(true)
        }
    }
    return (
        <>
            <nav className="little-lemon-navbar">
                <ListMenu className="h-space-item d-inline"/>
            </nav>
            <nav className="little-lemon-navbar-mobile-mode">
                <button onClick={handleNavMobileMode}
                        style={{background: 'transparent', border: 'none', outline: 'none'}}>
                    <img src={statusMobileMenu ? icon_ham : closeIcon} alt="hamburger menu icon"
                         style={{width: 20, height: 20}}/>
                </button>
            </nav>


        </>
    );
}

export default Nav;
