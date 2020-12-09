import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import PrivateRoute from './components/routing/PrivateRoute';

// Redux
import {Provider} from 'react-redux';
import store from './store';


// components
import Home from './components/home/Home';
import User from './components/user/User';
import UserLostPropertyList from './components/user/UserLostPropertyList';
import LostProperty from './components/lost_property/LostProperty';

import './App.css';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Route exact path="/" component={Home} />
          <Route exact path="/users/:id" component={User} />
          <Route exact path="/users/:id/lost_property" component={UserLostPropertyList} />
          <Route exact path="/lost_property/:id" component={LostProperty} />
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
