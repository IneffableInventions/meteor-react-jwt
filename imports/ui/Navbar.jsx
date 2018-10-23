import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withRouter, Link } from 'react-router-dom';
import Login from './Login.jsx';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: localStorage.getItem('IneffableUser'),
      username: null
    };
  }
  componentDidMount() {
    Meteor.call('users.decodificate', this.state.token, (err, res) => {
      if (err) {
        alert('Err' + err.error);
      } else if (res) {
        this.setState({
          username: res.username
        });
      }
    });
  }

  logOut() {
    this.setState({
      token: null,
      username: null
    });
    localStorage.removeItem('IneffableUser');
    window.location.reload();
  }

  renderNavbarOptions() {
    const options = [];
    if (this.state.token) {
      return (
        <li className="nav-item dropdown pointer">
          <a
            className="nav-link dropdown-toggle"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {this.state.username}
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item pointer" onClick={() => this.logOut()}>
              Log out
            </a>
          </div>
        </li>
      );
    } else {
      options.push(
        <li key="loginModalKey" className="nav-item navbar-right">
          <a
            id="buttonForLogIn"
            className="nav-link pointer"
            data-toggle="modal"
            data-target="#loginModal"
          >
            Log in
          </a>
        </li>
      );
      options.push(
        <li key="elementSignUp" className="nav-item">
          <a
            id="buttonForSignUp"
            className="nav-link pointer"
            onClick={() => this.props.history.push('/signUp')}
          >
            Sign up
          </a>
        </li>
      );
      return options;
    }
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-ineffable py-md-2">
          <div className="container">
            <Link to={'/'} style={{ textDecoration: 'none' }}>
              <div className="navbar-brand">
                <img
                  src="/IneffableInventionsHorizontalLogo.png"
                  className="d-inline-block align-top"
                  alt="Ineffable Inventions Logo"
                  height="80px"
                />
              </div>
            </Link>
            <button
              className="navbar-toggler custom-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div id="navbarNavDropdown" className="navbar-collapse collapse">
              <ul className="navbar-nav mx-auto" />
              <ul className="navbar-nav">{this.renderNavbarOptions()}</ul>
            </div>
          </div>
        </nav>
        <Login />
      </div>
    );
  }
}

export default withRouter(Navbar);
