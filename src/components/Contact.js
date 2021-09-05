import { React, useEffect } from 'react'
import ConsultationBtn from './ConsultationBtn';
import contactImg from '../assets/contact-img.jpg'

const Contact = () => {

    return (
        <div>
            <div class="parallax-container">
                <div class="parallax">
                    <img src={ contactImg }/>
                </div>
            </div>

            <div  class="section white contact-message">
                <div class="row container" data-aos="fade-right" data-aos-duration="750">
                <h3 class="header black-text" >Contact Us</h3>
                    <div class="black-text"> 
                    
                        <p>Want to see some more of our designs, book a consultation in person or just have some questions that you would prefer to have answered in person?   </p>
                        <br></br>

                        <h6 className = "text-center"><b>Why don't you pop into the show room?</b></h6>

                        <br></br>
                        <ul>
                            <li className = "text-center">1a Hankinson Way</li>
                            <li className = "text-center">Salford, Greater Manchester</li>
                            <li className = "text-center">Lancashire, M6 5JA</li>
                            <li className = "text-center">info@ambrosia-kitchens.co.uk</li>
                            <li className = "text-center">0161 684 33 98</li>
                        </ul>
                        <br></br>
                        <p className ="text-center">Opening hours:</p>
                        <p className ="text-center">Mon-Fri: 09.30 – 17.00</p>
                        <p className ="text-center">Saturday: 10.00 – 16.00</p>

                    </div>
              
              </div>
            </div>
            <div className = "row">
                <div className = "col s12 m2"></div>
                <div className = "col s12 m8 waves-effect waves-light">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6714.367646314672!2d-2.2930152135206874!3d53.48834083889077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bae3717085017%3A0x321cc424fa329ca2!2sSalford%20Shopping%20Centre!5e0!3m2!1sen!2suk!4v1630763119182!5m2!1sen!2suk" 
                        width="100%" 
                        height="700" 
                        style={{border: 0}}
                        allowfullscreen="" 
                        loading="lazy">
                    </iframe>
                </div>
                <div className = "col s12 m2"></div>    
            </div>
            
            <ConsultationBtn />

        </div>
    )
}

export default Contact
