import { React, useEffect } from 'react';
import { FaCommentDots } from 'react-icons/fa'
import "aos/dist/aos.css";
import AOS from 'aos/dist/aos.js';
import M from 'materialize-css/dist/js/materialize.min.js';


//cyan darken-3

const ConsultationBtn = () => {

    AOS.init();

    useEffect(() => {

        M.AutoInit();
  
      },[]);

    return (
        <div className = "home-btn-span">
            <div className = "home-btn-container" >
                <a href="#modal1" className = "modal-trigger">
                    <a class="home-btn btn white tooltipped" data-position="left" data-tooltip= "Get a consultation!">
                        <FaCommentDots className = "blue-grey-text text-darken-2 home-icon" />
                    </a>
                </a>
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


        </div>
    )
}

export default ConsultationBtn
