import React from 'react'
import './about.css'
import Navbar from '../../Components/Navbar/Navbar'

import AboutIMG from '../../Assets/Images/About_IMG.jpg'
import Background from '../../Components/Background/Background'

const About = () => {
    return (
        <>
            <Navbar />
            <Background />
            <div className="About">
                <div className="about">
                    <div className="a-image">
                        <img src={AboutIMG} alt="" />
                    </div>
                    <div className="a-detail">
                        <h3>|| About Me</h3>
                        <h1>I'm Abdirahman Abdulaziz</h1>
                        <h2>Front-End Developer : specializing in HTML, CSS, JavaScript, React & Git.</h2>
                        <p>I craft cutting-edge web interfaces that streamline workflows. My goal
                            is to deliver exceptional experiences that
                            meet both client needs and industry expectations,
                            ensuring your projects are not only successful but
                            also ahead of the curve.
                        </p>
                        <button className="button">
                            <span>GET RESUME</span>
                            <i class="fa-solid fa-download"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About