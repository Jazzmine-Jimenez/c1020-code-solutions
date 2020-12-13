import React from 'react';

export default class Validate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ password: event.target.password });
  }

  render() {
    return (
      <div className="container">
        <form>
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
