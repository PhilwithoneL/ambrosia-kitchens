import React from 'react'
import AOS from 'aos/dist/aos.js';
import { RiFacebookBoxFill, RiTwitterFill, RiInstagramFill } from 'react-icons/ri';


const Footer = () => {

    AOS.init();
    


    return (
        <div>
            <div class="white footer" >
                <footer class="page-footer blue-grey darken-3" data-aos="fade-right" data-aos-duration="750">
                    <div class="container" >
                        <div class="row">
                            <div class="col m12 s12 white-text">
                                <h5>Ambrosia Kitchens Ltd</h5>
                                <p class="text-flow footer-address">
                                    <ul>
                                        <li>47 Firth Lane</li>
                                        <li>Salford, Greater Manchester</li>
                                        <li>Lancashire, M15 5XY</li>
                                    </ul>
                                </p>
                            </div>

                            <div class="row">
                                <ul className = "">
                                <li><a href="#!" class="white-text col l3 m12 footer-info-links">Terms & Conditions</a></li>
                                <li><a href="#!" class="white-text col l3 m12 footer-info-links">Privacy & Cookie Policy</a></li>
                                
                                <li><a href="#!" class="white-text col l4 m12 footer-info-links">info@ambrosia-kitchens.co.uk</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="footer-copyright blue-grey darken-4" >
                        <div class="container">
                        © 2021 Ambrosia Kitchens Ltd
                            <div className="grey-text text-lighten-4 right" href="#!">

                                    <a class ="white-text"><RiFacebookBoxFill className = "social-footer-icon"/></a>

                                    <a class ="white-text"><RiTwitterFill className = "social-footer-icon"/></a>

                                    <a class ="white-text"><RiInstagramFill className = "social-footer-icon"/></a>

                            </div>
                        </div>
                    </div>
                </footer>
            </div>

        </div>
    )
}

export default Footer
