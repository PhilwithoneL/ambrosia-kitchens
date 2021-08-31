import React from 'react';
import { RiHomeSmileFill } from 'react-icons/ri'
import "aos/dist/aos.css";
import AOS from 'aos/dist/aos.js';


//cyan darken-3

const HomeBtn = () => {

    AOS.init();

    return (
        <div className = "home-btn-span">
            <div className = "home-btn-container">
                <a href = '/' class="home-btn btn white" >
                    <RiHomeSmileFill className = "blue-grey-text text-darken-2 home-icon" />
                </a>
            </div>
        </div>
    )
}

export default HomeBtn
