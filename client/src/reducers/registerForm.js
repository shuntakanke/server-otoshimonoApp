/* eslint-disable import/no-anonymous-default-export */
import { 
  SET_TYPE
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

    default:
      return state;
  }
}