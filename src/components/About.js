import React, { useEffect } from 'react';
import HomeBtn from './HomeBtn';
import "aos/dist/aos.css"
import AOS from 'aos/dist/aos.js';
import M from 'materialize-css/dist/js/materialize.min.js'
import kitchenAboutImg1 from '../assets/about-kitchen1.jpg';
import kitchenAboutImg2 from '../assets/about-kitchen2.jpg';
import { GiTalk } from 'react-icons/gi';
import { FaTape } from 'react-icons/fa';
import { FaTools } from 'react-icons/fa';

const About = () => {

    AOS.init();
  
    //Initializing javascript for materialize components

    useEffect(() => {

      M.AutoInit();

    },[]);

    return (
        <div>

            <div class="parallax-container">
                <div class="parallax">
                    <img src={ kitchenAboutImg1 }/>
                </div>
            </div>

            <div  class="section white about-message">
              <div class="row container" data-aos="fade-right" data-aos-duration="750">
              <h3 class="header black-text">About us</h3>
                <p class="black-text"> 
                  <p>Ambrosia kitchens are designed by us and handmade in our own factory by skilled craftsmen. Every one of our customers is different and so are the kitchens we design for them, from the worktops to the exquisite detailing on the drawer fronts.</p>
                  
                  <p>Where some companies say they offer a 'bespoke kitchen', we truly do and have consistently provided a complete and handmade package for all our customers. The vision is to create a stunning, individual and unique designer kitchen to enhance your home. You will find our designer kitches in the very best homes in Manchester and the Greater Manchester area!</p>
                </p>
              
              </div>
            </div>

            <div class="parallax-container">
                <div class="parallax">
                    <img src={ kitchenAboutImg2 }/>
                </div>
            </div>

            <div  class="section white about-process">
              <div class="row container" data-aos="fade-left" data-aos-duration="750">
              <h4 class="header black-text text-flow" >The 3 step process</h4>
                <div className ="section"></div>
               
                  <div class="row">
                    <div className= "col m4 s12 ">
                      <GiTalk className = "steps-icon"/>
                      <h5>Step One - <br></br>Consultation</h5>
                      <p>Ring us, send us a email through our page or visit our showroom. We go through your ideas, life style habits, and how you like to cook then generate some idea that fit your needs.</p>
                      <br></br>
                    </div>
                    
                    <div className= "col m4 s12 ">
                      <FaTape className = "steps-icon"/>
                      <h5>Step Two - <br></br>Survey & Architecture</h5>
                      <p>We will arrange to come and see your current kitchen to measure the space you have.Then we'll then create a virtual reality model to bring the ideas to life, and give you an in-depth view.</p>
                      <br></br>
                    </div>

                    <div className= "col m4 s12 ">
                      <FaTools className = "steps-icon"/>
                      <h5>Step Three - <br></br> Installation</h5>
                      <p>We will arrange a time and date for the installation to take place, and organize other trades if necessary, to make sure the installation runs smoothly.</p>
                      <br></br>
                    </div>

                  </div>

                  <div classNamE = "container">
                    <div className = "text-center text-align-center"><b>Click the link below to get a consultation or stop round our showroom today!</b></div>
                  </div>

                  <div className ="row step-divider"></div>
                  <div className = "row">
                    <div className = "col m1 s12">
                      
                    </div>
                    <div className = "col m10 s12 center-div">
                      <div className = "center-div">
                        <a class="waves-effect waves-light btn cyan darken-3 btn-large modal-trigger " href="#modal1">Get a consultation!</a>
                      </div>
                    </div>
                    <div className = "col m1 s12">
                      
                    </div>
                </div>                  

              </div>
            </div>


            <div id="modal1" class="modal">
                <div class="modal-content">
                
                    <form className="contact-form">
                            <label>Name</label>
                            <div className = "form-section name-form">
                                
                                <input type="text" name="from_name" />
                            </div>
                            <label>Email</label>
                            <div className = "form-section email-form">
                                
                                <input type="email" name="Email" />
                            </div>
                            <label>Phone</label>
                            <div className = "form-section subject-form">
                                <input type="text" name="Phone" />
                            </div>
                            <div className = "message-header"><label>Tell us about your ideas...</label></div>
                            <div className = "form-section message-form">
                                <textarea name="Message" />
                            </div>
                            <div className = "form-section send-form">
                                
                            </div>
                    </form>
                </div>
                <div class="modal-footer submit ">
                <a href="#!" class="modal-close waves-effect waves-green btn-flat "><input type="submit" value="Submit" className = "quote-form-submit" /></a>
                </div>
            </div>

          <HomeBtn />


        </div>
    )
}

export default About
