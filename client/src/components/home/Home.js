import React from 'react'
import { Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

import googleIcon from '../../img/google_icon.png';

const Home = ({
  auth:{
    isAuthenticated,
    loading,
    user
  }}) => {
  
  if(isAuthenticated) {
    return <Redirect to={`/users/${user._id}`} />
  }
  
  return (
    <div className="screen">
      <div className="container">
        <h1>おとしもの</h1>
        <a className="home" href="auth/google">
          <img width="20px" src={googleIcon} alt="icon" /> login</a>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, {})(Home);

