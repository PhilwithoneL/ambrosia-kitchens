import React, { useEffect } from 'react';
import "aos/dist/aos.css"
import AOS from 'aos/dist/aos.js';
import M from 'materialize-css/dist/js/materialize.min.js'
import kitchenAboutImg1 from '../assets/about-kitchen1.jpg';
import kitchenAboutImg2 from '../assets/about-kitchen2.jpg';

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
              <h2 class="header black-text" >About us</h2>
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
              <div class="row container" data-aos="fade-right" data-aos-duration="750">
              <h2 class="header black-text" >The 3 step process</h2>
                <p class="black-text"> 
                 
                </p>
              
              </div>
            </div>

        </div>
    )
}

export default About
