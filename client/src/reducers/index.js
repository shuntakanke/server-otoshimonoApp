import {combineReducers} from 'redux';
import auth from './auth';
import lostProperty from './lost_property';
import registerForm from './registerForm';


export default combineReducers({
    auth: auth,
    lostProperty: lostProperty,
    registerForm: registerForm
});