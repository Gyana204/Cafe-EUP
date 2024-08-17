import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div id="home_page" className="home-container bg-gray">
      {/* <div className="introduction">
        <h1 class="h1-large">I love to create beautiful and efficient websites</h1>
      </div> */}

      <div className="col-lg-6">
          <div className="text-container">
              <h1 className="h1-large">I love to create beautiful and efficient websites</h1>
              <a className="btn-solid-lg page-scroll" href="#about">Discover</a>
              <a className="btn-outline-lg page-scroll" href="#contact"><i className="fas fa-user"></i>Contact Me</a>
          </div>
      </div>
    </div>
  )
}

export default Home