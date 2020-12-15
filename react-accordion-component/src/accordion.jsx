import React from 'react';

export default class Accordion extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="box-container">
          <div className="title">
            <h1>Hypertext Markup Language</h1>
          </div>
        </div>
        <div className="box-container">
          <div className="title">
            <h1>Cascading Style Sheets</h1>
          </div>
        </div>
        <div className="box-container">
          <div className="title">
            <h1>JavaScript</h1>
          </div>
        </div>
      </div>
    );
  }
}
