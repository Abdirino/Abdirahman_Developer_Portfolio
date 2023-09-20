import React, { useState } from 'react'
import './navbar.css'

import NavIcon from '../../Assets/Images/A-Footer.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => {setClick(!click);};
    const close = () => {setClick(false)};

    return (
        <>
            <div className="navbar">

                <div className="left">
                    <div className="nav-logo">
                        <img src={NavIcon} alt="" />
                    </div>
                    <ul className="nav-items">
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/"
                                activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-links">About</li>
                        <li className="nav-links">Services</li>
                        <li className="nav-links">Portfolio</li>
                        <li className="nav-links">Contact</li>
                    </ul>
                </div>

                <div className="right">
                    <button className="button">Resume/CV</button>
                </div>
            </div>
        </>
    )
}

export default Navbar