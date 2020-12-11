import React from 'react';

export default class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleToggle() {
    this.setState({ isToggleOn: !this.state.isToggleOn });
  }

  render() {
    if (this.state.isToggleOn) {
      return (
        <div onClick={this.handleToggle} className="container">
          <div className="oval">
            <div className="circle off"></div>
          </div>
          <p className="switch">OFF</p>
        </div>
      );
    } else {
      return (
        <div onClick={this.handleToggle} className="container">
          <div className="oval on">
            <div className="circle on"></div>
          </div>
          <p className="switch">ON</p>
        </div>
      );
    }
  }
}
