/* eslint-disable import/no-anonymous-default-export */
import { GET_LOSTPROPERTIES_BY_USER  } from '../actions/types';

const initialState = {
  lostProperties: [],
  lostProperty:{},
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
    }
    default:
      return state;
  }
}