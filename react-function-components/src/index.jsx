import React from 'react';
import ReactDOM from 'react-dom';

function CustomButon(props) {
  return <button> Click Me!! </button>;
}

const container = document.querySelector('#root');
ReactDOM.render(<CustomButon />, container);
