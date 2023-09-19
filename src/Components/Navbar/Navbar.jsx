import React from 'react'
import './navbar.css'

import NavIcon from '../../Assets/Images/A-Footer.png';

const Navbar = () => {
    return (
        <>
            <div className="navbar">

                <div className="left">
                    <div className="nav-logo">
                        <img src={NavIcon} alt="" />
                    </div>
                    <ul className="nav-items">
                        <li className="nav-links">Home</li>
                        <li className="nav-links">About</li>
                        <li className="nav-links">Portfolio</li>
                        <li className="nav-links">Contact</li>
                    </ul>
                </div>

                <div className="right"></div>
            </div>
        </>
    )
}

export default Navbar