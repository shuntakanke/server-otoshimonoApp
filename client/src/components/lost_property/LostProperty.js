import React from 'react';
import { Link} from 'react-router-dom';

import homeIcon from '../../img/home_circle_icon_137496.png';
import mapImage from '../../img/map-sample.jpeg';

const LostProperty = () => {
  return (
    <div className="screen">
      <div className="container">
        <h1>登録したおとしもの</h1>
        <h2>神奈川県　相模原市　中央区</h2>
        <h2>2019/12/2</h2>
        <img src={mapImage} width="100%" alt="" />
        <div><Link to="/"><img src={homeIcon} alt="" /></Link></div> 
      </div>
    </div>
  )
}

export default LostProperty
