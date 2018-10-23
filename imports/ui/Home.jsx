import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

export default class Home extends Component {
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
        alert('Err' + err.error + err);
      } else if (res) {
        this.setState({
          username: res.username
        });
      }
    });
  }

  loadBody() {
    let username = this.state.username;
    if (username) {
      return (
        <div className="col-12 text-center">
          <h3>
            Welcome back <b>{username}</b>!
          </h3>
        </div>
      );
    } else {
      return (
        <div className="col-12 text-center">
          <h3>
            Please{' '}
            <Link to={'/signUp'} style={{ textDecoration: 'none' }}>
              Sign up
            </Link>{' '}
            or{' '}
            <a
              href="#"
              style={{ textDecoration: 'none' }}
              className="text-primary"
              onClick={() => document.getElementById('buttonForLogIn').click()}
            >
              Log in
            </a>
          </h3>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-12 text-center">
          <a href="http://ineffableinventions.com.co" target="blank">
            <img
              src="./IneffableInventionsLogo.png"
              alt="Ineffable Inventions"
              width="300px"
            />
          </a>
        </div>
        {this.loadBody()}
      </div>
    );
  }
}
