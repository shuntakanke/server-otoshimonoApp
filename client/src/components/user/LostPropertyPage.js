import React, { useEffect, Fragment }  from 'react';
import {Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getLostPropertyById } from '../../actions/lost_property';

import homeIcon from '../../img/home_circle_icon_137496.png';
import map from '../../img/map-sample.jpeg';




const LostPropertyPage = ({
  getLostPropertyById,
  lostProperty: {lostProperty, loading},
  match
}) => {
  useEffect(() => {
    getLostPropertyById(match.params.id);
  },[getLostPropertyById, match.params.id]);

  return (
    <div className="screen">
      <div className="container">
        <h1>登録したおとしもの</h1>

        {!loading && (
        <Fragment>
          <h2>{lostProperty.type} </h2>
          <h2>{lostProperty.location.coordinates[0]}  {lostProperty.location.coordinates[1]}</h2>
          <h2>{lostProperty.date} </h2>
        </Fragment>)}
        
        <img src={map} width="100%" alt="sanmple-map" />
        <div><Link to="/"><img src={homeIcon} alt="home" ></img></Link></div>
      </div>
    </div>
  )
};

const mapStateToProps = state => ({
  lostProperty: state.lostProperty
})

export default connect(mapStateToProps, { getLostPropertyById })(LostPropertyPage);