import React from 'react'
import { Link } from 'react-router-dom';

import './MenuBar.css'

const MenuBar = () => {
    return (
        <nav className="header">
            <div className="nav-wrapper">
                <a className="logo" href='/'>Logo<span>S</span></a>
                {/* <input className="menu-btn" type="checkbox" id="menu-btn"/>
                <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label> */}

                <ul className="menu">
                    <li><Link  to="/">Acceuil</Link></li>
                    <li><Link  to="/AboutUs">A propos</Link></li>
                    <li><Link to="/ContactUs">Contactez nous</Link></li>                
                </ul>
            </div>
        </nav>
    )
}

export default MenuBar;