import React from 'react';

export default class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isDrawerOpen: true };
    this.menuClick = this.menuClick.bind(this);
    this.changeView = this.changeView.bind(this);
  }

  changeView() {
    this.setState({ isDrawerOpen: !this.state.isDrawerOpen });
  }

  menuClick() {
    this.changeView();
  }

  render() {
    if (this.state.isDrawerOpen) {
      return (
        <div onClick={this.menuClick} className="container">
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
            <i onClick={this.menuClick} className="fas fa-bars"></i>
          </div>
        </div>
      );
    }
  }
}
