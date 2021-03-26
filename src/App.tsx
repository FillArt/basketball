import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact component={SignIn} path="/login" />
          <Route exact component={SignUp} path="/signup" />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
