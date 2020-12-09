import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { getLostPropertyByUser } from '../../actions/lost_property';
import LostPropertyItem from './LostPropertyItem';

import homeIcon from '../../img/home_circle_icon_137496.png';

const UserLostProperty = ({
  getLostPropertyByUser,
  lostProperty: {lostProperties, loading},
  match
}) => {
  useEffect(() => {
    getLostPropertyByUser(match.params.id);
  },[getLostPropertyByUser, match.params.id]);

  return (
    <div className="screen">
    <div className="container">
      <h1>登録したおとしもの</h1>
      
      {lostProperties.map(lostProperty => (
        <LostPropertyItem key={lostProperty._id} lostProperty={lostProperty} />
      ))}
        

    </div>  
    <div><Link to="/"><img src={homeIcon} alt="home" ></img></Link></div> 
  </div>
  )
}

const mapStateToProps = state => ({
  lostProperty: state.lostProperty
})

export default connect(mapStateToProps, { getLostPropertyByUser })(UserLostProperty);
