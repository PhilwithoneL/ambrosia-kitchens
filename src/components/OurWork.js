import { React, useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import HomeBtn from './HomeBtn';
import kitchenAboutImg1 from '../assets/about-kitchen1.jpg';
import kitchenAboutImg2 from '../assets/about-kitchen2.jpg';
import kitchenWelcomeImg1 from '../assets/Welcome-Kitchen.jpg';
import kitchenWelcomeImg2 from '../assets/Welcome-Kitchen2.jpg';

const OurWork = () => {

    useEffect(() => {

        M.AutoInit();
  
      },[]);


    return (
        <div>
            <div className = "section work-divider"></div>

            <div className = "row">

            <div className = "col m6 s12">

                <div class="card large">
                    <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src= { kitchenAboutImg1 }  />
                    </div>
                    <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">Bright, Open and Natural<i class="material-icons right">more_vert</i></span>
                    <p className = "blue-grey-text activator pointer">Click to read more!</p>
                    </div>
                    <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">Bright, Open and Natural<i class="material-icons right">close</i></span>
                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                </div>

            </div>

            <div className = "col m6 s12">

                <div class="card large">
                    <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src= { kitchenAboutImg2 }  />
                    </div>
                    <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">Sleek and Sophisticated<i class="material-icons right">more_vert</i></span>
                    <p className = "blue-grey-text activator pointer">Click to read more!</p>
                    </div>
                    <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">Sleek and Sophisticated<i class="material-icons right">close</i></span>
                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                </div>

            </div>

            <div className = "col m6 s12">

                <div class="card large">
                    <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src= { kitchenWelcomeImg1 }  />
                    </div>
                    <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">Stylish and Trendy<i class="material-icons right">more_vert</i></span>
                    <p className = "blue-grey-text activator pointer">Click to read more!</p>
                    </div>
                    <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">Stylish and Trendy<i class="material-icons right">close</i></span>
                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                </div>

            </div>

            <div className = "col m6 s12">

                <div class="card large">
                    <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src= { kitchenWelcomeImg2 }  />
                    </div>
                    <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">Modern and Simple<i class="material-icons right">more_vert</i></span>
                    <p className = "blue-grey-text activator pointer">Click to read more!</p>
                    </div>
                    <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">Modern and Simple<i class="material-icons right">close</i></span>
                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                </div>

            </div>

            </div>

            <HomeBtn />

        </div>
    )
}

export default OurWork
