import React from 'react';

export default class Validate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('Password:', this.state.password);
  }

  render() {
    const password = this.state.password;
    if (password === '') {
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
              <p className="error-message">Password is required</p>
            </div>
          </form>
        </div>
      );
    } else {
      return (
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="password"> Password: </label>
            <div>
              <input
                required
                id="password"
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
          </form>
        </div>
      );
    }

  }
}
