import homeIcon from '../../img/home_circle_icon_137496.png';
import locationImgSample from '../../img/register-map.png';
import React,{ Fragment, useEffect } from 'react';
import { Link,withRouter} from 'react-router-dom';
import { connect} from 'react-redux';
import { setLocation } from '../../actions/registerForm';

// Gmap yooooooooooooooo
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow
} from "@react-google-maps/api";
import mapStyles from "./mapStyles";
const libraries = ["places"];
const mapContainerStyle = {
  height: "100vh",
  width: "100vw"
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true
};

// 



const RegisterLocation = ({setLocation,history}) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAPjEXID5bFdy6zzRcSr5q0J6BeFfgOam8",
    libraries
  });
  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);
  // const [center, setCenter] =React.useState({
  //   lat: 35.721739,
  //   lng: 139.491206
  // });

  const center = {
    lat: 35.68715762294784, 
    lng: 139.76266582849175
  };
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        panTo({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      },
      () => null
    );
  },[])

  useEffect(() => {
    markers.length > 0 &&
    setTimeout(() => {
      setLocation(markers[0],history);
      // console.log(markers[0])
    }, 1000);
  },[markers]);


  const onMapClick = React.useCallback((e) => {
    setMarkers((current) => [
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng()
      },
      ...current
    ]);
  }, []);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(13);
  }, []);

  

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";



  return (<div className="screen">
            <div className="container">
              <h1>どこで拾われましたか？</h1>
              {/*  */}
              <Locate panTo={panTo} />
              {center ? (
              <GoogleMap
                id="map"
                mapContainerStyle={mapContainerStyle}
                zoom={7}
                center={center}
                options={options}
                onClick={onMapClick}
                onLoad={onMapLoad}
              >
                {markers.map((marker) => (
                  <Marker
                    key={`${marker.lat}-${marker.lng}`}
                    position={{ lat: marker.lat, lng: marker.lng }}
                    onClick={() => {
                      setSelected(marker);
                    }}
                  />
                ))}

                {selected ? (
                  <InfoWindow
                    position={{ lat: selected.lat, lng: selected.lng }}
                    onCloseClick={() => {
                      setSelected(null);
                    }}
                  >
                    <div>
                      <h2>
                        <span role="img" aria-label="bear">
                          🐻
                        </span>{" "}
                        Alert
                      </h2>
                    </div>
                  </InfoWindow>
                ) : null}
              </GoogleMap>

              ): null}
            </div>
            <div><Link to="/"><img src={homeIcon} alt="homeIcon"/></Link></div>
          </div> 
  )
}

function Locate({ panTo }) {
  return (
    <button
      className="locate"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude
            });
          },
          () => null
        );
      }}
    >
      <img src={homeIcon} alt="compass" />
    </button>
  );
}

export default connect(null,{setLocation})(withRouter(RegisterLocation));
