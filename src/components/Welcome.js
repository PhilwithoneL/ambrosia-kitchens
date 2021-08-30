import React, { useEffect } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import kitchenWelcomeImg1 from '../assets/Welcome-Kitchen.jpg';
import kitchenWelcomeImg2 from '../assets/Welcome-Kitchen2.jpg';
import "aos/dist/aos.css"
import AOS from 'aos/dist/aos.js';
import M from 'materialize-css/dist/js/materialize.min.js'

export const Welcome = () => {
    
    AOS.init();
  
    useEffect(() => {
      M.AutoInit();

    },[]);

    return (
        <div>
            <NavBar />
            <div class="parallax-container">
                <div class="parallax"><img src={ kitchenWelcomeImg1 }/></div>
            </div>

            <div  class="section white welcome-message">
              <div class="row container" data-aos="fade-right" data-aos-duration="750">
                <h2 class="header black-text" >Welcome!</h2>
                <p class="black-text"> 
                  <p>We offer high quality, bespoke kitchen renovations in the Manchester area. We offer a range styles and designs to best meet your needs and budget.</p>
                    
                  <div className = "quote">Click the link below to get a consultation or stop round our showroom today!</div>
                </p>

                <div className ="row welcome-divider"></div>
                  <div className = "row">
                    <div className = "col s1">
                      
                    </div>
                    <div className = "col s10 center-div">
                      <div className = "center-div">
                        <a class="waves-effect waves-light btn cyan darken-3 btn-large modal-trigger" href="#modal1"> Get a consultation!</a>
                      </div>
                    </div>
                    <div className = "col s1">
                      
                    </div>
                </div>
              
              </div>
            </div>

            <div class="parallax-container">
                <div class="parallax"><img src={ kitchenWelcomeImg2 }/></div>

            </div>

            <div  class="section white welcome-message">

            </div>
            
            <Footer />
  
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
        



        </div>
    )
}

export default Welcome
