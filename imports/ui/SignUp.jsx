import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withRouter } from 'react-router-dom';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.usernameInput = React.createRef();

    this.passwordInput = React.createRef();
  }

  handleSubmit(event) {
    event.preventDefault();

    let username = this.usernameInput.current.value;
    let password = this.passwordInput.current.value;
  }

  render() {
    return (
      <div className="row">
        <div className="col-12 mt-3 no-gutters">
          <div className="bg-ineffable text-light text-center">
            <br />
            <h2 className="font-weight-bold">
              &nbsp;Welcome to Ineffable Inventions&nbsp;
            </h2>
            <h4>Please create an account</h4>
            <br />
          </div>
          <hr />
        </div>
        <div className="col-12">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
              <label htmlFor="signUpInputUsername">
                <b>Username</b>
              </label>
              <input
                type="text"
                className="form-control"
                id="signUpInputUsername"
                ref={this.usernameInput}
                minLength="5"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="signUpInputPassword">
                <b>Password</b>
              </label>
              <input
                type="password"
                className="form-control"
                id="signUpInputPassword"
                ref={this.passwordInput}
                minLength="8"
                maxLength="35"
                autoComplete="foo"
                required
              />
            </div>
            <center>
              <button type="submit" className="btn btn-ineffable mr-1">
                Done!
              </button>
            </center>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignUp);
