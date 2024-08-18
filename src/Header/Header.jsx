import React from 'react'
import './header.css'

import Link from 'next/link'

const Header = () => {
  return (
    // <div className="header">
    //   <a href="#default" className="logo">
    //     {/* <img className='cmpLogo' src='images/logo2.png' alt='logo' /> */}
    //     logo
    //   </a>
    //   <div className="header-right">
    //     {/* <a className="active" href="#home">Home</a>
    //     <a href="#contact">Contact</a>
    //     <a href="#about">About</a> */}
    //     <Link href="/home">Home</Link>
    //     <Link href="/about">About</Link>
    //     <Link href="/contact">Contact</Link>
    //   </div>
    // </div>

    <div>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
          <div className="container">
        
              {/* <a className="navbar-brand logo-image" href="index.html"><img src="images/logo.svg" alt="alternative"></a>   */}

              
              <a className="navbar-brand logo-text page-scroll" href="index.html">GY</a>

              <button className="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
                  <span className="navbar-toggler-icon"></span>
              </button>

              <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                  <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                          <a className="nav-link page-scroll" href="#header">Home</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link page-scroll" href="#about">About</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link page-scroll" href="#services">Services</a>
                      </li>
                      <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Drop</a>
                          <div className="dropdown-menu" aria-labelledby="dropdown01">
                              <a className="dropdown-item page-scroll" href="project.html">Project Details</a>
                              <div className="dropdown-divider"></div>
                              <a className="dropdown-item page-scroll" href="terms.html">Terms Conditions</a>
                              <div className="dropdown-divider"></div>
                              <a className="dropdown-item page-scroll" href="privacy.html">Privacy Policy</a>
                          </div>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link page-scroll" href="#contact">Contact</a>
                      </li>
                  </ul>
                  <span className="nav-item social-icons">
                      <span className="fa-stack">
                          <a href="#your-link">
                              <i className="fas fa-circle fa-stack-2x"></i>
                              <i className="fab fa-facebook-f fa-stack-1x"></i>
                          </a>
                      </span>
                      <span className="fa-stack">
                          <a href="#your-link">
                              <i className="fas fa-circle fa-stack-2x"></i>
                              <i className="fab fa-twitter fa-stack-1x"></i>
                          </a>
                      </span>
                  </span>
              </div>
          </div>
      </nav>
      <header id="header" className="header">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="text-container">
                        <h1 className="h1-large">I love to create beautiful and efficient websites</h1>
                        <a className="btn-solid-lg page-scroll" href="#about">Discover</a>
                        <a className="btn-outline-lg page-scroll" href="#contact"><i className="fas fa-user"></i>Contact Me</a>
                    </div>
                </div> 
            </div> 
        </div> 
      </header>
    </div>
  )
}

export default Header
