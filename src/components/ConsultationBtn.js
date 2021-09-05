import { React, useEffect } from 'react';
import { FaCommentDots } from 'react-icons/fa'
import ConsultationModal from './ConsultationModal.js';
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

        <div>

            <div className = "consultation-btn-span">

                <div className = "consultation-btn-container" >
                    <a href="#modal1" className = "modal-trigger">
                        <a class="consultation-btn btn white tooltipped" data-position="left" data-tooltip= "Get a consultation!">
                            <FaCommentDots className = "blue-grey-text text-darken-2 comment-icon" />
                        </a>
                    </a>
                </div>

            </div>

            <ConsultationModal />

        </div>
    )
}

export default ConsultationBtn
