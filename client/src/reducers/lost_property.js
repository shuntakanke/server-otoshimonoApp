/* eslint-disable import/no-anonymous-default-export */
import { 
  GET_LOSTPROPERTIES_BY_USER ,
  GET_LOSTPROPERTIES_BY_ID
} from '../actions/types';

const initialState = {
  lostProperties: [],
  lostProperty:null,
  loading: true,
}

export default function(state = initialState, action) {
  const { type , payload} =action;

  switch (type) {
    case GET_LOSTPROPERTIES_BY_USER:
      return {
        ...state,
        lostProperties: payload,
        loading: false,
    };
    case GET_LOSTPROPERTIES_BY_ID:
      return {
        ...state,
        lostProperty: payload,
        loading: false,
    };
    default:
      return state;
  }
}