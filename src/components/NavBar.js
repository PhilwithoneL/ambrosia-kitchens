import React, { useEffect } from 'react';
import Logo from '../assets/ambrosia-logo.svg';
import M from 'materialize-css/dist/js/materialize.min.js';


export const NavBar = () => {
    
    useEffect(() => {
        M.AutoInit();
        
        
    },[]) 
    
    return (       
        <div>
          <nav>
            <div class="nav-wrapper white">
            <a href="/" class="nav-logo-name brand-logo grey-text text-darken-4 "><h4>Ambrosia Kitchens</h4></a>
              <a href="/" class="brand-logo center"><img class = "nav-logo" src={Logo} alt="Ambrosia Logo"/></a>
              <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons nav-side-bar-trigger">menu</i></a>
              <ul class="right hide-on-med-and-down">

                <li><a href="/about" className = "grey-text text-darken-4">About</a></li>
                <li><a href="/OurWork" className = "grey-text text-darken-4">Our Work</a></li>
                <li><a href="/Contact" className = "grey-text text-darken-4">Contact</a></li>
                
              </ul>
            </div>
          </nav>

          <ul class="sidenav " id="mobile-demo">
            <li><a href="/">Welcome</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/OurWork">Work</a></li>
            <li><a href="/Contact">Contact</a></li>
          </ul>
            
        </div>
    )
}

export default NavBar









