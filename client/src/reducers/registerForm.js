/* eslint-disable import/no-anonymous-default-export */
import { 
  SET_TYPE,
  SET_DATE,
  SET_LOCATION
} from '../actions/types';

const initialState = {
  type:null,
  date:null,
  lng:null,
  lat:null,
  address:null
}

export default function(state = initialState, action) {
  const { type , payload} =action;

  switch (type) {
    case SET_TYPE:
      return {
        ...state,
        type: payload
    };
    case SET_DATE:
      return {
        ...state,
        date: payload
      };
    case SET_LOCATION:
      return {
        ...state,
        lng: payload.location.lng,
        lat: payload.location.lat,
        address: payload.address
      };

    default:
      return state;
  }
}