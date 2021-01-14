import axios from 'axios';
import { Redirect } from 'react-router-dom';
import registerForm from '../reducers/registerForm';
import { 
  SET_TYPE,
  SET_DATE,
  SET_LOCATION
} from './types';

export const setType = (type, history) => async dispatch => {
  try {
    dispatch({ type: SET_TYPE, payload: type }); 
    console.log("fuckuuuuu");
    // □- ⬇️page遷移をhistoryで実装する
    history.push('/register/date');

  } catch (error) {
    console.log(error)
  }
};

export const setDate = (date, history) => async dispatch => {
  try {
    dispatch({ type: SET_DATE, payload: date }); 
    console.log("fuckuuuuu");
    // □- ⬇️page遷移をhistoryで実装する
    history.push('/register/location');

  } catch (error) {
    console.log(error)
  }
}

export const setLocation = (location, history) => async dispatch => {
  try {
    const res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&language=ja&key=AIzaSyAPjEXID5bFdy6zzRcSr5q0J6BeFfgOam8`);
    console.log(res);

    const address = await res.data.results[2].formatted_address;

    dispatch({ type: SET_LOCATION, payload: {address,location} }); 
    console.log("fuckuuuuu");
    // □- ⬇️page遷移をhistoryで実装する
    history.push('/register/submit');

  } catch (error) {
    console.log(error)
  }
}

export const postForm = (registerForm, history) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const res = await axios.post('/api/lost_property', registerForm, config);

    history.push(`/lost_property/${res.data._id}`);
  } catch (error) {
    console.log(error)
  }
}