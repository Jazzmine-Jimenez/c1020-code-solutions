import React from 'react';

export default class Validate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  handleChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  handleError() {
    if (this.state.password === '') {
      return 'a password is required';
    }
    return 'Your password should be at least 8 characters long';
  }

  isLenghtMet() {
    const element = (
      <div className="container">
        <form>
          <label htmlFor="password"> Password: </label>
          <div>
            <input
              id="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <i className="fas fa-check check-icon"></i>
          </div>
        </form>
      </div>
    );
    return element;
  }

  render() {
    const password = this.state.password;
    if (password === '' || password.length < 8) {
      return (
        <div className="container">
          <form>
            <label htmlFor="password"> Password: </label>
            <div>
              <input
                id="password"
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <i className="fas fa-times x-icon"></i>
              <p className="error-message">{this.handleError()}</p>
            </div>
          </form>
        </div>
      );
    } else {
      const lengthMet = this.isLenghtMet();
      return lengthMet;
    }
  }
}
