import React from 'react'
import './Home.css'
//import imagePath from '@/Routes/Home/images';

const Home = () => {
  return (
    <div>

      <div className="home-container bg-gray">
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

      {/* About */}
      <div>
        <div id="about" className="basic-1 bg-gray">
          <div className="container">
              <div className="row">
                  <div className="col-lg-4">
                      <div className="text-container first">
                          <h2>Hi there I'm Mark,</h2>
                          <p>And I love to create beautiful and efficient websites for my customers. I love going through the entire process with the customer from concept, to design and then development and launch</p>
                      </div>
                  </div>
                  <div className="col-lg-4">
                      <div className="text-container second">
                          <div className="time">2019 - PRESENT</div>
                          <h6>Freelance Web Developer</h6>
                          <p>Working happily on my own web projects</p>
                          <div className="time">2018 - 2019</div>
                          <h6>Lead Web Developer</h6>
                          <p>Beautiful project for a major digital agency</p>
                      </div>
                  </div>
                  <div className="col-lg-4">
                      <div className="text-container third">
                          <div className="time">2017 - 2018</div>
                          <h6>Senior Web Designer</h6>
                          <p>Inhouse web designer for ecommerce firm</p>
                          <div className="time">2016 - 2017</div>
                          <h6>Junior Web Designer</h6>
                          <p>Junior web designer for small web agency</p>
                      </div>
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
                    <p className="p-heading">Web design and development have been my bread and butter for more than 5 years. During that time I've discovered that I can help startups and companies with the following services</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <div className="text-box">
                        <i className="far fa-gem"></i>
                        <h4>DESIGN</h4>
                        <p>Successful online projects start with good design. It establishes a solid foundation for future development and allows for long term growth</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="text-box">
                        <i className="fas fa-code"></i>
                        <h4>DEVELOPMENT</h4>
                        <p>I can code my own designs or even use the customer's design as base. My focus is to generate clean code that's well structured for reliability</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="text-box">
                        <i className="fas fa-tv"></i>
                        <h4>BASIC SEO</h4>
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
                    <p>I am a great communicator and love to invest the necessary time to understand the customer's problem very well</p>
                    <h5>DESIGN TOOLS</h5>
                    <p>My favorite design tools are Photoshop and Illustrator but I can create designs in Figma, Sketch and Adobe XD too</p>
                    <h5>DEVELOPMENT SKILLS</h5>
                    <p>I am familiar and work on a daily basis with HTML, CSS, JavaScript, Bootstrap and other modern frameworks</p>
                    
                    <div className="icons-container">
                        <img src="./images/react.webp" alt="alternative" />
                        
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>         
  )
}

export default Home