import React from 'react';
import {Link} from 'react-router-dom';

import bag from '../../img/lostProperty-bag.png';



const LostPropertyItem = ({
  lostProperty: {_id, user, type, location, date}
}) => {
  return (
    <div className="lostProperty-container">
      <Link className="list-lostProperty" to={`/lost_property/${_id}`}>
        {!type ? (
          <img width="45px" className="lostProperty-type" src={bag} alt="" />
        ):(
          <img width="45px" name={type} className="lostProperty-type" src={type} alt={type} />
        )}
        <h4 className="address">{`経度-${location.coordinates[0]} , 緯度-${location.coordinates[1]}`} </h4>
        <p>{date}</p>
      </Link>
    </div>
  )
}

export default LostPropertyItem
