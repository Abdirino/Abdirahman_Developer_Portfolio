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
            <h1>Hello there 👋, I'm Abdirahman Abdulaziz</h1>
            <p>Lorem ipsum dolor sit amet quis.</p>
            <button className="button">GET RESUME</button>
          </div>
          <div className="h-social"></div>
        </div>
      </div>
    </>
  )
}

export default Home