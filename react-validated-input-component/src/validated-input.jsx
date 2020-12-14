import React from 'react';

export default class Validate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.emptySubmit = this.emptySubmit.bind(this);
    this.submitError = this.submitError.bind(this);
  }

  handleChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('Password:', this.state.password);
  }

  emptySubmit() {
    const element = (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="password"> Password: </label>
          <div>
            <input
              id="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <i className="fas fa-times x-icon"></i>
            <p className="error-message">Password is required</p>
          </div>
        </form>
      </div>
    );
    return element;
  }

  submitError() {
    const element = (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="password"> Password: </label>
          <div>
            <input
              id="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <i className="fas fa-times x-icon"></i>
            <p className="error-message">Your password is too short.</p>
          </div>
        </form>
      </div>
    );
    return element;
  }

  lenghtMet() {
    const element = (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
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
    if (password === '') {
      const errorElement = this.emptySubmit();
      return errorElement;
    } else if (password.length > 8) {
      const lengthMet = this.lenghtMet();
      return lengthMet;
    } else if (password.length < 8) {
      const submitError = this.submitError();
      return submitError;
    } else {
      return (
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="password"> Password: </label>
            <div>
              <input
                id="password"
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <i className="fas fa-times x-icon"></i>
              <p className="error-message">Your password is too short.</p>
            </div>
          </form>
        </div>
      );
    }
  }
}
