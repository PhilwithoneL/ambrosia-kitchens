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
                    
                  <div className = "quote">Click the link below to get a quote or stop round our showroom today!</div>
                </p>

                <div className ="row welcome-divider"></div>
                  <div className = "row">
                    <div className = "col s4">
                      
                    </div>
                    <div className = "col s4 center-div">
                      <div className = "center-div">
                        <a class="waves-effect waves-light btn cyan darken-3 btn-large"> Click For Quote!</a>
                      </div>
                    </div>
                    <div className = "col s4">
                      
                    </div>
                </div>
              
              </div>
            </div>
            <div class="parallax-container">
                <div class="parallax"><img src={ kitchenWelcomeImg2 }/></div>
            </div>
            
            <Footer />
        
        </div>
    )
}

export default Welcome
