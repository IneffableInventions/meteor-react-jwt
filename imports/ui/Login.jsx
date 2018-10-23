import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withRouter } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);

    this.usernameInput = React.createRef();

    this.passwordInput = React.createRef();
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  goToSignUp() {
    document.getElementById('buttonForLogIn').click();
    this.props.history.push('/signUp');
  }

  render() {
    return (
      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-sm"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header bg-ineffable text-light">
              <h5 className="modal-title" id="exampleModalLabel">
                Welcome!
              </h5>
              <button
                type="button"
                id="closeLoginModal"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span className="text-light" aria-hidden="true">
                  &times;
                </span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                  <label htmlFor="loginInputUsername">
                    <b>Username</b>
                  </label>
                  <input
                    type="mail"
                    className="form-control"
                    id="loginInputUsername"
                    ref={this.usernameInput}
                    minLength="4"
                    maxLength="35"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="loginInputPassword">
                    <b>Contraseña</b>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="loginInputPassword"
                    ref={this.passwordInput}
                    minLength="8"
                    maxLength="35"
                    autoComplete="foo"
                    required
                  />
                </div>
                <center>
                  <button type="submit" className="btn btn-ineffable">
                    Log in
                  </button>
                </center>
                <br />
              </form>
              <p className="text-center">
                Don't have an account?
                <br />
                <span
                  className="text-ineffable font-weight-bold pointer"
                  onClick={this.goToSignUp.bind(this)}
                >
                  Sign up
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Login);
