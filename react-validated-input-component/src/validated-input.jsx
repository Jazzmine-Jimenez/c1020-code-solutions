import React from 'react';

export default class Validate extends React.Component {
  render() {
    return (
      <div className="container">
        <form>
          <label htmlFor="password"> Password: </label>
          <div>
            <input id="password" type="password"/>
            <i className="fas fa-times x-icon"></i>
            <p className="error-message">Password is required</p>
          </div>
        </form>
      </div>
    );
  }
}
