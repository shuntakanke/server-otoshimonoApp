import {combineReducers} from 'redux';
import auth from './auth';
import lostProperty from './lost_property';


export default combineReducers({
    auth: auth,
    lostProperty: lostProperty
});