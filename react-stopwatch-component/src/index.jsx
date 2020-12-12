import React from 'react';
import ReactDOM from 'react-dom';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0, isTicking: false };
    this.addASecond = this.addASecond.bind(this);
    this.handleClickPlay = this.handleClickPlay.bind(this);
    this.handleClickPause = this.handleClickPause.bind(this);
    this.changeIcon = this.changeIcon.bind(this);
  }

  addASecond() {
    this.setState({ seconds: this.state.seconds + 1 });
  }

  changeIcon() {
    this.setState({ isTicking: !this.state.isTicking });
  }

  handleClickPlay() {
    this.changeIcon();
    this.timerID = setInterval(
      () => this.addASecond(),
      1000
    );
  }

  handleClickPause() {
    this.changeIcon();
    clearInterval(this.timerID);
  }

  render() {
    if (!this.state.isTicking) {
      return (
        <div className="container">
          <div className="row">
            <div className="column-full">
              <div className="circle">
                <div className="time">{this.state.seconds}</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="pause-button">
              <i onClick={this.handleClickPlay} className="fas fa-play"></i>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="row">
            <div className="column-full">
              <div className="circle">
                <div className="time">{this.state.seconds}</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="play-button">
              <i onClick={this.handleClickPause} className="fas fa-pause"></i>
            </div>
          </div>
        </div>
      );
    }
  }
}

ReactDOM.render(<StopWatch/>, document.querySelector('#root'));
