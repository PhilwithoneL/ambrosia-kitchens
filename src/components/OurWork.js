import { React, useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import ConsultationBtn from './ConsultationBtn';
import Example1 from '../assets/Example1.jpg';
import Example2 from '../assets/Example2.jpg';
import Example3 from '../assets/Example3.jpg';
import Example4 from '../assets/Example4.jpg';

const OurWork = () => {

    useEffect(() => {

        M.AutoInit();
  
      },[]);


    return (
        <div>
            <div className = "section work-divider"></div>

            <div className = "row">

            <div className = "col m6 s12 l6 xl3">

                <div class="card large">
                    <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src= { Example1 }  />
                    </div>
                    <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">Bright, Open and Natural<i class="material-icons right">more_vert</i></span>
                    <p className = "blue-grey-text activator pointer">Click to read more!</p>
                    </div>
                    <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">Bright, Open and Natural<i class="material-icons right">close</i></span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis, nisi id vestibulum dictum, nunc quam lacinia dolor, vel placerat ipsum leo vitae quam. Vivamus imperdiet erat nunc, eget tempus magna maximus tempor. Mauris euismod ornare quam, a mollis risus ultricies a. Nullam purus massa, eleifend ac arcu quis, interdum pharetra ante. Curabitur porta sodales augue, ut ultrices magna convallis sed. Aliquam cursus risus ullamcorper ligula tincidunt, et luctus felis tempus. Donec scelerisque leo sed aliquam malesuada. Cras quis consectetur mauris. Aenean ultricies sapien at dolor tempor vehicula. Fusce dui ipsum, tristique nec interdum non, imperdiet eget lectus. Proin vel purus ex.</p>
                    </div>
                </div>

            </div>

            <div className = "col m6 s12 l6 xl3">

                <div class="card large">
                    <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src= { Example2 }  />
                    </div>
                    <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">Sleek and Sophisticated<i class="material-icons right">more_vert</i></span>
                    <p className = "blue-grey-text activator pointer">Click to read more!</p>
                    </div>
                    <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">Sleek and Sophisticated<i class="material-icons right">close</i></span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis, nisi id vestibulum dictum, nunc quam lacinia dolor, vel placerat ipsum leo vitae quam. Vivamus imperdiet erat nunc, eget tempus magna maximus tempor. Mauris euismod ornare quam, a mollis risus ultricies a. Nullam purus massa, eleifend ac arcu quis, interdum pharetra ante. Curabitur porta sodales augue, ut ultrices magna convallis sed. Aliquam cursus risus ullamcorper ligula tincidunt, et luctus felis tempus. Donec scelerisque leo sed aliquam malesuada. Cras quis consectetur mauris. Aenean ultricies sapien at dolor tempor vehicula. Fusce dui ipsum, tristique nec interdum non, imperdiet eget lectus. Proin vel purus ex.</p>
                    </div>
                </div>

            </div>

            <div className = "col m6 s12 l6 xl3">

                <div class="card large">
                    <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src= { Example3 }  />
                    </div>
                    <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">Stylish and Trendy<i class="material-icons right">more_vert</i></span>
                    <p className = "blue-grey-text activator pointer">Click to read more!</p>
                    </div>
                    <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">Stylish and Trendy<i class="material-icons right">close</i></span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis, nisi id vestibulum dictum, nunc quam lacinia dolor, vel placerat ipsum leo vitae quam. Vivamus imperdiet erat nunc, eget tempus magna maximus tempor. Mauris euismod ornare quam, a mollis risus ultricies a. Nullam purus massa, eleifend ac arcu quis, interdum pharetra ante. Curabitur porta sodales augue, ut ultrices magna convallis sed. Aliquam cursus risus ullamcorper ligula tincidunt, et luctus felis tempus. Donec scelerisque leo sed aliquam malesuada. Cras quis consectetur mauris. Aenean ultricies sapien at dolor tempor vehicula. Fusce dui ipsum, tristique nec interdum non, imperdiet eget lectus. Proin vel purus ex.</p>
                    </div>
                </div>

            </div>

            <div className = "col m6 s12 l6 xl3">

                <div class="card large">
                    <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src= { Example4 }  />
                    </div>
                    <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">Modern and Simple<i class="material-icons right">more_vert</i></span>
                    <p className = "blue-grey-text activator pointer">Click to read more!</p>
                    </div>
                    <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">Modern and Simple<i class="material-icons right">close</i></span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis, nisi id vestibulum dictum, nunc quam lacinia dolor, vel placerat ipsum leo vitae quam. Vivamus imperdiet erat nunc, eget tempus magna maximus tempor. Mauris euismod ornare quam, a mollis risus ultricies a. Nullam purus massa, eleifend ac arcu quis, interdum pharetra ante. Curabitur porta sodales augue, ut ultrices magna convallis sed. Aliquam cursus risus ullamcorper ligula tincidunt, et luctus felis tempus. Donec scelerisque leo sed aliquam malesuada. Cras quis consectetur mauris. Aenean ultricies sapien at dolor tempor vehicula. Fusce dui ipsum, tristique nec interdum non, imperdiet eget lectus. Proin vel purus ex.</p>
                    </div>
                </div>

            </div>

            </div>
            <div className = "section work-footer-divider"></div>

            <ConsultationBtn />

        </div>
    )
}

export default OurWork
