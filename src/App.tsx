import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { Dashboard } from './pages/Dashboard'

import PrivateRoute from './helpers/PrivateRoute';
import { routePaths } from './helpers/constants/routePath'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact component={SignIn} path={`${routePaths.signIn}`} />
          <Route component={SignUp} path={`${routePaths.signUp}`} />

          <PrivateRoute path={`${routePaths.teams}`} component={Dashboard} />
          <Route component={SignIn} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
