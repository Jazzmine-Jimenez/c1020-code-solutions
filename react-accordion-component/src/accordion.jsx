import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHtmlOpen: false,
      isCssOpen: false,
      isJsOpen: false
    };

    this.openHTML = this.openHTML.bind(this);
  }

  openHTML() {
    this.setState({
      isHtmlOpen: true,
      isCssOpen: false,
      isJsOpen: false
    });
  }

  render() {
    if (this.state.isHtmlOpen === true) {
      return (
        <div className="container">
          <div className="box-container">
            <div onClick={this.openHTML} className="title">
              <h1>Hypertext Markup Language</h1>
            </div>
            <div className="description">
              <p>Hypertext Markup Language (HTML) is the standard markup language
              for creating web pages and web applications. With Cascading Style Sheets
              (CSS) and JavaScript, it forms a traid of cornorstone technologies for
              the World Wide Web.
              </p>
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
    } else {
      return (
        <div className="container">
          <div className="box-container">
            <div onClick={this.openHTML} className="title">
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
}
