import axios from 'axios';
import { GET_LOSTPROPERTIES_BY_USER } from './types';

export const getLostPropertyByUser = userId => async dispatch => {
  try {
    const res = await axios.get(`/api/lost_property/users/${userId}`);
  
    dispatch({ type: GET_LOSTPROPERTIES_BY_USER, payload: res.data });
  } catch (error) {
    console.log(error)
  }
};