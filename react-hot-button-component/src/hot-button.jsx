import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    this.count = this.count.bind(this);
  }

  count() {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  render() {
    if (this.state.clicks >= 3 && this.state.clicks < 9) {
      return (
        <button onClick={this.count} className="step1"> Hot Button </button >
      );
    } else if (this.state.clicks >= 9 && this.state.clicks < 12) {
      return (
        <button onClick={this.count} className="step3"> Hot Button </button >
      );
    } else if (this.state.clicks >= 12 && this.state.clicks < 15) {
      return (
        <button onClick={this.count} className="step4"> Hot Button </button >
      );
    } else if (this.state.clicks >= 15 && this.state.clicks < 18) {
      return (
        <button onClick={this.count} className="step5"> Hot Button </button >
      );
    } else if (this.state.clicks >= 18) {
      return (
        <button onClick={this.count} className="step6"> Hot Button </button >
      );
    } else {
      return (
        <button onClick={this.count} className="step0"> Hot Button </button >
      );
    }
  }
}
