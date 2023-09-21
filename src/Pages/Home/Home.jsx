import React from 'react'
import './home.css'
import Navbar from '../../Components/Navbar/Navbar'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="Home">
        <div className="home">
          <div className="h-detail">
            <h1>Hello there 👋,</h1>
            <h1>I'm Abdirahman A.</h1>
            <p>Front-End Developer specializing in HTML, CSS, JavaScript, React & Git.</p>
            <button className="button">
              <span>GET RESUME</span>
              <i class="fa-solid fa-download"></i>
            </button>
          </div>
          <div className="h-links">

            <div className="proj-link">
              <h1>Take a tour of my <span>projects</span></h1>
              <h2>Explore My Work and discover the
                creativity that fuels my designs, and the
                innovation that breathes life into my code.
              </h2>
            </div>

            <div className="h-social">
              <h1>Say Hello 🤝</h1>
              <h2>Let's Connect and forge a meaningful
                partnership in the digital realm.
              </h2>
              <div className="social">
                <i class="fa-brands fa-square-x-twitter"></i>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-square-facebook"></i>
                <i class="fa-brands fa-square-github"></i>
                <i class="fa-brands fa-square-instagram"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home