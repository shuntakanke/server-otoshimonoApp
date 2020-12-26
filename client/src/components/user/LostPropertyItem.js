import React from 'react';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';

import bag from '../../img/lostProperty-bag.png';
import key from '../../img/lostProperty-key.png';
import creditCard from '../../img/lostProperty-creditCard.png';



const LostPropertyItem = ({
  lostProperty: {_id, user, type, location, date,address}
}) => {
  
  return (
    <div className="lostProperty-container">
      <Link className="list-lostProperty" to={`/lost_property/${_id}`}>
        {type === "bag" && (<img width="45px" className="lostProperty-type" src={bag} alt="" />)}
        {type === "key" && (<img width="45px" className="lostProperty-type" src={key} alt="" />)}
        {type === "creditCard" && (<img width="45px" className="lostProperty-type" src={creditCard} alt="" />)}

        <h4 className="address">{address} </h4>
        <p><Moment format='YYYY/MM/DD'>{date}</Moment></p>
      </Link>
    </div>
  )
}

export default LostPropertyItem
