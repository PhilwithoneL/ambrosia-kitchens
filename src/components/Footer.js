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
                        <div class="col l6 s12 white-text">
                            <h5>Ambrosia Kitchens Ltd</h5>
                            <p class="text-flow footer-address">
                                <ul>
                                    <li>47 Firth Lane</li>
                                    <li>Salford, Greater Manchester</li>
                                    <li>Lancashire, M15 5XY</li>
                                </ul>
                            </p>
                        </div>
                        <div class="col l4 offset-l2 s12 ">
                            <h5 class="white-text">Info</h5>
                            <ul>
                            <li><a href="#!" class="white-text">Terms & Conditions</a></li>
                            <li><a href="#!" class="white-text">Privacy & Cookie Policy</a></li>
                            <li><a href="#!" class="white-text">0161 684 44 76</a></li>
                            <li><a href="#!" class="white-text">info@ambrosia-kitchens.co.uk</a></li>
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
