import React from 'react';
import logo from '../Assets/images/svg/Logo.svg'
import ListMenu from "./ListMenu";

const doormatNavigation = [
    {id: 1, title: 'Home', link: 'home'},
    {id: 2, title: 'About', link: 'about'},
    {id: 3, title: 'Menu', link: 'menu'},
    {id: 4, title: 'Reservations', link: 'reservations'},
    {id: 5, title: 'Order Online', link: 'order-online'},
    {id: 6, title: 'Login', link: 'login'},
]
const contactList = [
    {id: 1, title: 'Address', value: "test"},
    {id: 2, title: 'Phone number', value: "+123456789"},
    {id: 3, title: 'Email', value: "test@test.test"},
]

const socialMediaList = [
    {id: 1, title: 'Instagram', value: "@test"},
    {id: 2, title: 'Facebook', value: "@test"},
    {id: 3, title: 'Whatsapp', value: "@test"},
]

function Footer(props) {
    return (
        <footer className="little-lemon-footer">
            <div style={{height: '100%', margin: "auto 0"}}>
                <img src={logo} alt="little lemon logo"/>
            </div>

            <ListMenu className="v-space-item" extraItem={<li>
                    <span style={{fontWeight: 'bold'}}>
                        Doormat navigation
                    </span>
            </li>}/>

            <ul className="list-menu">
                <li>
                    <span style={{fontWeight: 'bold'}}>
                        Contact
                    </span>
                </li>
                {
                    contactList.map(item => <li className="list-item v-space-item" key={item.id}>
                        {item.title}: {item.value}
                    </li>)
                }
            </ul>
            <ul className="list-menu">
                <li>
                    <span style={{fontWeight: 'bold'}}>
                        Social media
                    </span>
                </li>
                {
                    socialMediaList.map(item => <li className="list-item v-space-item" key={item.id}>
                        {item.title}: {item.value}
                    </li>)
                }
            </ul>
        </footer>
    );
}

export default Footer;
