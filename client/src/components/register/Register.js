import React,{ Fragment } from 'react';
import {Link, Switch, Route, useRouteMatch} from 'react-router-dom';
import { connect } from 'react-redux';
import Moment from 'react-moment';

import homeIcon from '../../img/home_circle_icon_137496.png';
import bag from '../../img/suitcase.svg';
import key from '../../img/key.svg';
import credit from '../../img/credit-card.svg';

import RegisterType from './RegisterType';
import RegisterDate from './RegisterDate';
import RegisterLocation from './RegisterLocation';

const Register = ({
  registerForm: {type,date,lng,lat,address}
}) => {
  let { path, url } = useRouteMatch();

  return (<Fragment>
            <div className="register-header">
              <ul className="register-list">
                <Link to={`${url}`}>
                  <li>
                  {type === "bag" && (<img width="45px" className="lostProperty-type" src={bag} alt="bag" />)}
                  {type === "key" && (<img width="45px" className="lostProperty-type" src={key} alt="key" />)}
                  {type === "credit" && (<img width="45px" className="lostProperty-type" src={credit} alt="credit" />)}
                  </li>
                </Link>
                <Link to={`${url}/date`}>
                  <li className="register-date-number">{date && (<Moment format='DD'>{date}</Moment>)}</li>
                </Link>
                <Link to={`${url}/location`}>
                  <li></li>
                </Link>
              </ul>
            </div>

            <Switch>
              <Route exact path={`${path}`}>
                <RegisterType />
              </Route>
              <Route path={`${path}/date`}>
                <RegisterDate />
              </Route>
              <Route path={`${path}/location`}>
                <RegisterLocation />
              </Route> 
            </Switch>
          </Fragment>
  )
}

const mapStateToProps = state => ({
  registerForm: state.registerForm
})

export default connect(mapStateToProps, {})(Register);
