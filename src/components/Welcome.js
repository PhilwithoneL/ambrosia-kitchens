import React, { useEffect } from 'react';
import kitchenWelcomeImg1 from '../assets/Welcome-Kitchen.jpg';
import kitchenWelcomeImg2 from '../assets/Welcome-Kitchen2.jpg';
import "aos/dist/aos.css"
import AOS from 'aos/dist/aos.js';
import M from 'materialize-css/dist/js/materialize.min.js'
import Slider from "react-slick";
import "slick-carousel/slick/slick.js"; 
import { RiChatQuoteFill } from 'react-icons/ri';


export const Welcome = () => {
    
    //Initializing animate on scroll

    AOS.init();
  
    //Initializing javascript for materialize components

    useEffect(() => {

      M.AutoInit();

    },[]);

    //Code for Slick Slider

    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      slidesToScroll: 1,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 4500,
      slidesToShow: 1, 
    };

    return (
        <div>
            
            <div class="parallax-container">
            <div class="parallax"><img src={ kitchenWelcomeImg1 }/></div></div>


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
                        <a class="waves-effect waves-light btn cyan darken-3 btn-large modal-trigger " href="#modal1"> Get a consultation!</a>
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

            <div  class="section white welcome-message " data-aos="fade-left" data-aos-duration="750">

            <div>
              <h2 className = "text-center">Testimonials</h2>
              

              <Slider {...settings}>

                <div >
                    <h3 className = "text-center"><RiChatQuoteFill /></h3>
                    <div className = "section"></div>
                    <h6 className = "text-center testimonal-quote"><i>"Absolutely delighted with my kitchen. I had my own ideas of what I wanted in cupboards and nothing was too much trouble.The finish is superb and now I have a dream kitchen. Thank you Ambrosia Kitchens!"</i></h6>
                    <p className = "text-center testimonal-name">Heather Mayweather</p>
                </div>

                <div >
                    <h3 className = "text-center"><RiChatQuoteFill /></h3>
                    <div className = "section"></div>
                    <h6 className = "text-center testimonal-quote"><i>"We used this company as they project managed the whole kitchen renovation which included knocking down walls and opening up doorways. We really can’t fault any of the work or the level of service as everything was well managed and the timetable adhered to. The kitchen looks fantastic and we have no hesitation recommending them!"</i></h6>
                    <p className = "text-center testimonal-name">Jonathan Stanley</p>
                </div>


                <div >
                  <h3 className = "text-center"><RiChatQuoteFill /></h3>
                  <div className = "section"></div>
                  <h6 className = "text-center testimonal-quote"><i>"I can honestly say that there is not one company that I've ever worked with that has better service than Ambrosia."</i></h6>
                  <p className = "text-center testimonal-name">Genesis Davis</p>
                </div>
                
                <div >
                  <h3 className = "text-center"><RiChatQuoteFill /></h3>
                  <div className = "section"></div>
                  <h6 className = "text-center testimonal-quote"><i>"Thank you so much everyone at Ambrosia Kitchens for my fabulous kitchen!"</i></h6>
                  <p className = "text-center testimonal-name">Madison Gonzalez</p>
                </div>
                
             
              </Slider>
            </div>
             

            </div>
            
            <div className = "section"></div>
            
            
  
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
