/* eslint-disable import/no-anonymous-default-export */
import { FETCH_USER } from '../actions/types';

const initialState = {
  isAuthenticated:null,
  loading: true,
  user: {
    id:null,
    name:null,
    image:null
  }
}

export default function(state = initialState, action) {
  const { type , payload} =action;

  switch (type) {
    case FETCH_USER:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: {
          id: payload._id,
          name: payload.username,
          image: payload.imageUrl
        }
    }
    default:
      return state;
  }
}