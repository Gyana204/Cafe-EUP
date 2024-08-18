import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <div className="footer bg-gray">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12">
                      <div className="social-container">
                        <span className="fa-stack">
                            <a href="https://www.linkedin.com/in/gyana-ranjan-nath-898b32165" target='_blank'>
                            <img src="./images/social/linkedin.png" alt="LinkedIn" />
                                {/* <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-facebook-f fa-stack-1x"></i> */}
                            </a>
                        </span>
                        <span className="fa-stack">
                            <a href="https://www.facebook.com/gyanaranjan.nath" target='_blank'>
                            <img src="./images/social/facebook.png" alt="facebook" />
                                {/* <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-facebook-f fa-stack-1x"></i> */}
                            </a>
                        </span>
                        <span className="fa-stack">
                            <a href="#your-link">
                            <img src="./images/social/youtube.png" alt="youtube" />
                                {/* <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-twitter fa-stack-1x"></i> */}
                            </a>
                        </span>
                        <span className="fa-stack">
                            <a href="#your-link">
                            <img src="./images/social/instagram.png" alt="instagram" />
                                {/* <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-pinterest-p fa-stack-1x"></i> */}
                            </a>
                        </span>
                        <span className="fa-stack">
                            <a href="#your-link">
                            <img src="./images/social/twitter.png" alt="twitter" />
                                {/* <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-instagram fa-stack-1x"></i> */}
                            </a>
                        </span>
                        <span className="fa-stack">
                            <a href="#your-link">
                            <img src="./images/social/googleplus.png" alt="google plus" />
                                {/* <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-youtube fa-stack-1x"></i> */}
                            </a>
                        </span>
                        <span className="fa-stack">
                            <a href="#your-link">
                            <img src="./images/social/whatsapp.png" alt="Whatsapp" />
                                {/* <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-youtube fa-stack-1x"></i> */}
                            </a>
                        </span>
                        <span className="fa-stack">
                            <a href="#your-link">
                            <img src="./images/social/skype.png" alt="Skype" />
                                {/* <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-youtube fa-stack-1x"></i> */}
                            </a>
                        </span>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* Copyright */}
      <div className="copyright bg-gray">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12">
                      <p className="p-small">Copyright © <a className="no-line" href="#your-link">Gyana Ranjan Nath</a></p>
                  </div>
              </div>
          </div>

          {/* <div className="container">
              <div className="row">
                  <div className="col-lg-12">
                      <p className="p-small">Distributed By <a className="no-line" href="https://themewagon.com/">Themewagon</a></p>
                  </div>
              </div>
          </div> */}
      </div>

    </div>
  )
}

export default Footer
