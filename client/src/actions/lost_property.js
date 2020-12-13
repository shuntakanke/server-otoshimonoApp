import axios from 'axios';
import { 
  GET_LOSTPROPERTIES_BY_USER,
  GET_LOSTPROPERTIES_BY_ID
} from './types';

export const getLostPropertyByUser = userId => async dispatch => {
  try {
    const res = await axios.get(`/api/lost_property/users/${userId}`);
  
    dispatch({ type: GET_LOSTPROPERTIES_BY_USER, payload: res.data });
  } catch (error) {
    console.log(error)
  }
};


export const getLostPropertyById = id => async dispatch => {
  try {
    const res = await axios.get(`/api/lost_property/${id}`);
    console.log("fuckuuuuu");
  
    dispatch({ type: GET_LOSTPROPERTIES_BY_ID, payload: res.data });
  } catch (error) {
    console.log(error)
  }
};