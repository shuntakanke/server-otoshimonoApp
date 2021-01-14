import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import { connect} from 'react-redux';
import { postForm } from '../../actions/registerForm';

import homeIcon from '../../img/home_circle_icon_137496.png';


const SubmitForm = ({postForm,history,registerForm}) => {
  return (<div className="screen">
            <div className="container">
              <h1>上記の内容で登録しますか？</h1>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <button className="register-lostProperty" onClick={e => {
                e.preventDefault();
                postForm(registerForm, history);
              }} >登録</button>
            </div>
            <div><Link to="/"><img src={homeIcon} alt="homeIcon"/></Link></div>
          </div> 
  )
}

const mapStateToProps = state => ({
  registerForm: state.registerForm
})

export default connect(mapStateToProps,{postForm})(withRouter(SubmitForm));
