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
    this.openCSS = this.openCSS.bind(this);
    this.openJS = this.openJS.bind(this);
  }

  openHTML() {
    this.setState({
      isHtmlOpen: !this.state.isHtmlOpen,
      isCssOpen: false,
      isJsOpen: false
    });
  }

  openCSS() {
    this.setState({
      isHtmlOpen: false,
      isCssOpen: !this.state.isCssOpen,
      isJsOpen: false
    });
  }

  openJS() {
    this.setState({
      isHtmlOpen: false,
      isCssOpen: false,
      isJsOpen: !this.state.isJsOpen
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
            <div onClick={this.openCSS} className="title">
              <h1>Cascading Style Sheets</h1>
            </div>
          </div>
          <div className="box-container">
            <div onClick={this.openJS} className="title">
              <h1>JavaScript</h1>
            </div>
          </div>
        </div>
      );
    }
    if (this.state.isCssOpen === true) {
      return (
        <div className="container">
          <div className="box-container">
            <div onClick={this.openHTML} className="title">
              <h1>Hypertext Markup Language</h1>
            </div>
          </div>
          <div className="box-container">
            <div onClick={this.openCSS} className="title">
              <h1>Cascading Style Sheets</h1>
            </div>
            <div className="description">
              <p>Cascading Style Sheets (CSS) is a style sheet language used for
              describing the presentation of a document written in markup langauge
              like HTML. CSS is a cornerstone technology of the World Wide Web
              along side HTML and JavaScript.
              </p>
            </div>
          </div>
          <div className="box-container">
            <div onClick={this.openJS} className="title">
              <h1>JavaScript</h1>
            </div>
          </div>
        </div>
      );
    } else if (this.state.isJsOpen === true) {
      return (
        <div className="container">
          <div className="box-container">
            <div onClick={this.openHTML} className="title">
              <h1>Hypertext Markup Language</h1>
            </div>
          </div>
          <div className="box-container">
            <div onClick={this.openCSS} className="title">
              <h1>Cascading Style Sheets</h1>
            </div>
          </div>
          <div className="box-container">
            <div onClick={this.openJS} className="title">
              <h1>JavaScript</h1>
            </div>
            <div className="description">
              <p>JavaScript, often abbreviated as JS, is a high-level, interpreted
              programming language that conforms to the ECMAScript specification.
              JavaScript has curly-bracket syntax, dynamic typing, prototype-based
              object-orientation and first-class functions.
              </p>
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
            <div onClick={this.openCSS} className="title">
              <h1>Cascading Style Sheets</h1>
            </div>
          </div>
          <div className="box-container">
            <div onClick={this.openJS} className="title">
              <h1>JavaScript</h1>
            </div>
          </div>
        </div>
      );
    }
  }
}
