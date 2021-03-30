import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { Dashboard } from './pages/Dashboard'

import PrivateRoute from './helpers/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact component={SignIn} path="/login" />
          <Route exact component={SignUp} path="/signup" />
          <PrivateRoute  path="/"  component={Dashboard}  exact />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
