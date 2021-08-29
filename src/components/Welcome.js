import React, { useEffect } from 'react';
import NavBar from './NavBar';
import M from 'materialize-css/dist/js/materialize.min.js';
import kitchenWelcomeImg1 from '../assets/Welcome-Kitchen.jpg'
import kitchenWelcomeImg2 from '../assets/Welcome-Kitchen2.jpg'

export const Welcome = () => {

    useEffect(() => {
        M.AutoInit();
        

    },[]) 

    return (
        <div>
            <NavBar />
            <div class="parallax-container">
                <div class="parallax"><img src={ kitchenWelcomeImg1 }/></div>
              </div>
              <div class="section white welcome-message">
                <div class="row container">
                  <h2 class="header">Welcome!</h2>
                  <p class="grey-text text-darken-3 lighten-3"> 
                    <p>We offer high quality, bespoke kitchen renovations in the Manchester area. We offer a range styles and designs to best meet your needs and budget.</p>
                    
                    <div className = "quote">Click the link below to get a quote or stop round our showroom today!</div>
                  </p>
                </div>
              </div>
              <div class="parallax-container">
                <div class="parallax"><img src={ kitchenWelcomeImg2 }/></div>
              </div>
        </div>
    )
}

export default Welcome
