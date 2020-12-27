import React from 'react';
import {Link} from 'react-router-dom';

//  style="margin: 0 auto;" width="60%"
import homeIcon from '../../img/home_circle_icon_137496.png';
import dateImgSample from '../../img/register-date.png';


const RegisterDate = () => {
  return (<div className="screen">
            <div className="container">
              <h1>いつ拾われましたか？</h1>
              <img className="register-date-img" src={dateImgSample} alt="register-date" />
            </div>
            <div><Link to="/"><img src={homeIcon} alt="homeIcon"/></Link></div>
          </div> 
  )
}

export default RegisterDate