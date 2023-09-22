import React, { useState } from 'react'
import './navbar.css'

import NavIcon from '../../Assets/Images/A-Footer.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => { setClick(!click); };
    const close = () => { setClick(false) };

    return (
        <>
            <div className='navbar' onClick={(e) => e.stopPropagation}>

                <div className="left">
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fa fa-times" : "fa-solid fa-bars-staggered"}></i>
                    </div>
                    <NavLink to='/'>
                        <div className="nav-logo">
                            <img src={NavIcon} alt="" />
                        </div>
                    </NavLink>
                    <ul className="nav-items">
                        <li>
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
                    <button className="button">
                        <span>HIRE ME</span>
                        <i class="fa-solid fa-angles-right"></i>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Navbar