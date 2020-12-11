import React from 'react';

export default class ToggleButton extends React.Component {

  render() {
    return (
      <div className="oval">
        <div className="circle"></div>
        <p className="switch">OFF</p>
      </div>
    );
  }
}
