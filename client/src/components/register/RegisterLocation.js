import React,{ Fragment } from 'react';
import { Link} from 'react-router-dom';

import homeIcon from '../../img/home_circle_icon_137496.png';
import locationImgSample from '../../img/register-map.png';

const RegisterLocation = () => {
  return (<div className="screen">
            <div className="container">
              <h1>どこで拾われましたか？</h1>
              <img className="register-location-img" src={locationImgSample}  alt="register-map-img" />
            </div>
            <div><Link to="/"><img src={homeIcon} alt="homeIcon"/></Link></div>
          </div> 
  )
}

export default RegisterLocation
