import React from 'react';

export default class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isDrawerOpen: false };
  }

  render() {
    if (!this.isDrawerOpen) {
      return (
        <div className="container">
          <div className="drawer">
            <div className="row">
              <div className="column-one-third">
                <div className="menu-box">
                  <div className="menu-items">
                    <h2>Menu</h2>
                    <h5>About</h5>
                    <h5>Get Started</h5>
                    <h5>Sign In</h5>
                  </div>
                </div>
              </div>
              <div className="column-two-third">
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="menu-button">
            <i className="fas fa-bars"></i>
          </div>
        </div>
      );
    }
  }
}
