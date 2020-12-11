import React from 'react';

export default class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { click: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      click: true
    });
  }

  render() {
    if (this.state.click) {
      return (
        <div onClick={this.handleClick} className="container">
          <div className="oval">
            <div className="circle off"></div>
          </div>
          <p className="switch">OFF</p>
        </div>
      );
    } else {
      return (
        <div onClick={this.handleClick} className="container">
          <div className="oval on">
            <div className="circle on"></div>
          </div>
          <p className="switch">ON</p>
        </div>
      );
    }
  }
}
