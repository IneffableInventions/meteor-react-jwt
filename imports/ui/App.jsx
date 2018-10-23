import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import SignUp from './SignUp.jsx';
import Home from './Home.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container container-fluid mt-3">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signUp" component={SignUp} />
            <Redirect from="*" to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
