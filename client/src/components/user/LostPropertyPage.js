import React, { useEffect, Fragment }  from 'react';
import {Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getLostPropertyById } from '../../actions/lost_property';
import Moment from 'react-moment';

import homeIcon from '../../img/home_circle_icon_137496.png';

import bag from '../../img/lostProperty-bag.png';
import key from '../../img/lostProperty-key.png';
import creditCard from '../../img/lostProperty-creditCard.png';

import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker
} from "react-google-maps";


const LostPropertyPage = ({
  getLostPropertyById,
  lostProperty: {lostProperty, loading},
  match
}) => {
  useEffect(() => {
    getLostPropertyById(match.params.id);
  },[getLostPropertyById, match.params.id]);

  function Map() {
    if(lostProperty) {
      let center = {
        lat: lostProperty.location.coordinates[1], 
        lng: lostProperty.location.coordinates[0]}
      return ( <GoogleMap
          defaultZoom={15}
          defaultCenter={center}
        >
          <Marker
          position={{
            lat: lostProperty.location.coordinates[1],
            lng: lostProperty.location.coordinates[0]
          }}
        />
        </GoogleMap>
      );
    }
  }
  const MapWrapped = withScriptjs(withGoogleMap(Map));

  return (
    <div className="screen">
      <div className="container">
        <h1>登録したおとしもの</h1>

        {loading || lostProperty ===null ? (
          <Fragment>'yoo'</Fragment>
        ) : (
        <Fragment>
            <h2>
              {lostProperty.type === "bag" && (<img width="45px" className="lostProperty-type" src={bag} alt="s" />)}
              {lostProperty.type === "key" && (<img width="45px" className="lostProperty-type" src={key} alt="s" />)}
              {lostProperty.type === "creditCard" && (<img width="45px" className="lostProperty-type" src={creditCard} alt="s" />)}
            </h2>
            <h2><Moment format='YYYY/MM/DD'>{lostProperty.date}</Moment></h2>
        </Fragment>
        )}

        {/* <img src={map} width="100%" alt="sanmple-map" /> */}
        <div style={{width: "100vw", height:"100vh"}}>
          {loading || lostProperty === null ? (
            <Fragment>'yoo'</Fragment>
          ) : (
            <MapWrapped
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAPjEXID5bFdy6zzRcSr5q0J6BeFfgOam8"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          )}
        </div>


        <div><Link to="/"><img src={homeIcon} alt="home" ></img></Link></div>
      </div>
    </div>
  )
};

const mapStateToProps = state => ({
  lostProperty: state.lostProperty
})

export default connect(mapStateToProps, { getLostPropertyById })(LostPropertyPage);