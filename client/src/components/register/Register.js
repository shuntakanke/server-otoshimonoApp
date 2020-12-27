import React,{ Fragment } from 'react';
import {Link, Switch, Route, useRouteMatch} from 'react-router-dom';

import homeIcon from '../../img/home_circle_icon_137496.png';
import bag from '../../img/suitcase.svg';
import key from '../../img/key.svg';
import credit from '../../img/credit-card.svg';

import RegisterType from './RegisterType';
import RegisterDate from './RegisterDate';
import RegisterLocation from './RegisterLocation';

const Register = () => {
  let { path, url } = useRouteMatch();

  return (<Fragment>
            <div className="register-header">
              <ul className="register-list">
                <Link to={`${url}`}>
                  <li><img src={bag} alt="bag"/></li>
                </Link>
                <Link to={`${url}/date`}>
                  <li className="register-date-number"></li>
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

export default Register
