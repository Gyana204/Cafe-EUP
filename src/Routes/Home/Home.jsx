import React from 'react'
import './Home.css'
//import imagePath from '@/Routes/Home/images';

const Home = () => {
  return (
    <div>

      {/* <div className="home-container bg-gray">
        <div className="home-text-container">
            <div className="text-container">
                <h1 className="h1-large">I love to create beautiful and efficient websites</h1>
                <a className="btn-solid-lg page-scroll" href="#about">Discover</a>
                <a className="btn-outline-lg page-scroll" href="#contact"><i className="fas fa-user"></i>Contact Me</a>
            </div>
        </div>
      </div> */}

      {/* About */}
      <div>
        <div id="about" className="basic-1 bg-gray">
          <div className="container">
              <div className="row">
                  <div className="col-lg-4">
                      <div className="text-container first">
                          <h2>Hi there I'm Gyana,</h2>
                          <p>And I love to create beautiful and efficient websites for my customers. I love going through the entire process with the customer from concept, to design and then development and launch</p>
                      </div>
                  </div>
                  <div className="col-lg-4">
                      <div className="text-container second">
                          <div className="time">2020 - PRESENT</div>
                          <a href='https://www.impelsys.com/' target='_blank' className='time'>Impelsys</a>
                          <h6>Sr. Software Engineer</h6>
                          <p>Beautiful project for American Heart Association.</p>
                          <div className="time">2018 - 2020</div>
                          <a href='https://www.provab.com/' target='_blank' className='time'>Provab Technosoft</a>
                          <h6>Software Engineer</h6>
                          <p>Web application development for travel/hotel booking firm</p>
                      </div>
                  </div>
                  <div className="col-lg-4">
                      <div className="text-container third">
                          <div className="time">2016 - 2018</div>
                          <a href='#' target='_blank' className='time'>Arixle Solutions</a>
                          <h6>Web Developer</h6>
                          <p>Web Developer for a company called Arixle Solutions</p>
                      </div>
                      {/* <div className="time">2018 - 2019</div>
                          <h6>Lead Web Developer</h6>
                          <p>Beautiful project for a major digital agency</p> */}
                  </div>
              </div>
          </div>
        </div>
      </div>

      {/* Services     */}
      <div id="services" className="basic-2">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2 className="h2-heading">Offered services</h2>
                    <p className="p-heading">Web design and development have been my bread and butter for more than 7 years. During that time I've discovered that I can help startups and companies with the following services</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <div className="text-box">
                        {/* <i className="far fa-gem"></i> */}
                        <img src='images/design4.gif' alt='design' className='wd100px' />
                        <h4>DESIGN</h4>
                        <p>Successful online projects start with good design. It establishes a solid foundation for future development and allows for long term growth</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="text-box">
                        {/* <i className="fas fa-code"></i> */}
                        <img src='images/development.gif' alt='development' className='wd100px' />
                        <h4>DEVELOPMENT</h4>
                        <p>I can code my own designs or even use the customer's design as base. My focus is to generate clean code that's well structured for reliability</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="text-box">
                        {/* <i className="fas fa-tv"></i> */}
                        <img src='images/mentenance1.gif' alt='mentenance' className='wd100px' />
                        <h4>MAINTENANCE</h4>
                        <p>i can setup your project to use basic SEO principles which will push your project to the first page on search engines and save you ads money</p>
                    </div>
                </div>
            </div>
        </div>
      </div>

    {/* Details */}
    <div className="split">
      <div className="area-1">
      </div>
        <div className="area-2 bg-gray">
          <div className="container">    
            <div className="row">
              <div className="col-lg-12">
                <div className="text-container">
                    <h2>Why Work With Me</h2>
                    <p>I am a great communicator and love to invest the necessary time to understand the customer's problem very well.</p>
                    <h5>DESIGN TOOLS</h5>
                    <p>My favorite design tools are Photoshop and Illustrator but I can create designs in Figma, Sketch and Adobe XD too.</p>
                    <h5>DEVELOPMENT SKILLS</h5>
                    <p>I am familiar and work on a daily basis with NodeJs, ReactJs, NextJs, PHP, Laravel, MySql, MongoDb, HTML, CSS, JavaScript, Bootstrap and other modern frameworks.</p>
                    
                    <div className="icons-container">
                      <img src="./images/NodeJs.png" alt="alternative" />
                      <img src="./images/ReactJs.png" alt="alternative" />
                      <img src="./images/php.png" alt="alternative" />
                      <img src="./images/NextJs.png" alt="alternative" />
                      <img src="./images/MySql.png" alt="alternative" />
                      <img src="./images/MongoDb.png" alt="alternative" />
                      <img src="./images/details-icon-photoshop.png" alt="alternative" />
                      <img src="./images/details-icon-illustrator.png" alt="alternative" />
                      <img src="./images/details-icon-html.png" alt="alternative" />
                      <img src="./images/details-icon-css.png" alt="alternative" />
                      <img src="./images/details-icon-bootstrap.png" alt="alternative" />
                      <img src="./images/details-icon-javascript.png" alt="alternative" />
                      <img src="./images/laravel.png" alt="alternative" />
                      <img src="./images/Codeigniter.png" alt="alternative" />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>

    {/* Projects */}
    <div id="projects" className="basic-3">
      <div className="container">
          <div className="row">
              <div className="col-lg-12">
                  <h2 className="h2-heading">Delivered projects</h2>
                  <p className="p-heading">Listed below are some of the most representative projects I've worked on. They range from basic web design for presentation sites to advanced web development for online shops</p>
              </div>
          </div>
          <div className="row">
              <div className="col-lg-12">
                  <div className="text-container-noUseHere">
                      <div className="image-container">
                          <a href="https://elearning-stg.heartblr.org/" target='_blank'>
                              <img className="img-fluid" src="images/projects/project-1.png" alt="alternative" />
                          </a>
                      </div>
                      <p><strong>For:</strong> American Heart Association, <strong>Project:</strong> web design for their corporate websites and landing pages for marketing campaigns <a className="blue" href="https://elearning-stg.heartblr.org/" target='_blank'>details</a></p>
                  </div>
                  <div className="text-container-noUseHere">
                      <div className="image-container">
                          <a href="https://www.travelomatix.com/"  target='_blank'>
                              <img className="img-fluid" src="images/projects/project-2.png" alt="alternative" />
                          </a>
                      </div>
                      <p><strong>For:</strong> Travelomatix, <strong>Project:</strong> designed and developed modern platform for purchasing second hand cars online <a className="blue" href="https://www.travelomatix.com/"  target='_blank'>details</a></p>
                  </div>
                  <div className="text-container-noUseHere">
                      <div className="image-container">
                          <a href="https://cheapmytripaviation.com/" target='_blank'>
                              <img className="img-fluid" src="images/projects/project-3.png" alt="alternative" />
                          </a>
                      </div>
                      <p><strong>For:</strong> CheapMyTrip, <strong>Project:</strong> created a custom video editing and upload web app for this awesome team <a className="blue" href="https://cheapmytripaviation.com/" target='_blank'>details</a></p>
                  </div>
                  <div className="text-container-noUseHere">
                      <div className="image-container">
                          <a href="https://pacetravels.com/" target='_blank'>
                              <img className="img-fluid" src="images/projects/project-4.png" alt="alternative" />
                          </a>
                      </div>
                      <p><strong>For:</strong> Pace Travel, <strong>Project:</strong> complete redesign of their corporate website and platform update for their online shop <a className="blue" href="https://pacetravels.com/" target='_blank'>details</a></p>
                  </div>
              </div>
          </div>
      </div>
    </div>

    {/* Contact */}
    <div id="contact" className="form-1 bg-gray">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2>Contact details</h2>
                    <p className="p-heading">For any type of online project please don't hesitate to get in touch with me. The fastest way is to send me your message using the following email <a className="blue no-line" href="#your-link">gyana204@gmail.com</a></p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <form id="contactForm">
                        <div className="form-group">
                            <input type="text" className="form-control-input" id="cname" required />
                            <label className="label-control">Name</label>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control-input" id="cemail" required />
                            <label className="label-control">Email</label>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control-textarea" id="cmessage" required></textarea>
                            <label className="label-control">Project details</label>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="form-control-submit-button">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  </div>         
  )
}

export default Home