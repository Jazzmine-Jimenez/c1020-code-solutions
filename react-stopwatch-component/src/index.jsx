import React from 'react';
import ReactDOM from 'react-dom';

class StopWatch extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { seconds: 0 };
  // }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="column-full">
            <div className="circle">
              <div className="time">0</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="play-button">
            <i className="fas fa-play"></i>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<StopWatch/>, document.querySelector('#root'));
