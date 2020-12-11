import React from 'react';
import ReactDOM from 'react-dom';

class NewsLetterForm extends React.Component {
  render() {
    return (
      <form action="">
        <label htmlFor="email"> Email: </label>
        <input type="email" name="email" id="email"/>
        <button>Sign Up</button>
      </form>
    );
  }
}

ReactDOM.render(
  <NewsLetterForm />,
  document.querySelector('#root')
);
