import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import {fetchUser} from '../../actions/auth';
import { connect } from 'react-redux';

import homeIcon from '../../img/home_circle_icon_137496.png';

const User = ({ fetchUser, 
  auth:{
    isAuthenticated,
    loading,
    user
  }}) => {
  useEffect(() => {
    fetchUser();
},[fetchUser]);

  return (
    <div className="screen">
      <div className="container">
      <h1>ようこそ {user.name}さん<img width="50px" src={user.image} alt=""/></h1>
        <Link className="show-lostProperty" to={`/users/${user.id}/lost_property`}>登録した落とし物を見る</Link>
        <Link className="register-lostProperty" to={'/register'}>登録する</Link>
      </div>
      <div> <Link to="/"><img src={homeIcon} alt="homeIcon"/></Link></div> 
    </div> 
  )
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { fetchUser })(User);
