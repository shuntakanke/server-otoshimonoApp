import { 
  SET_TYPE,
  SET_DATE
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