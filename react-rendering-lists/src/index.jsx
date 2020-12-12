import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

class List extends React.Component {

  render() {
    const listItems = pokedex.map(poke => {
      return <li key={poke.number}> {poke.name} </li>;
    });
    return (
      <ul>{listItems}</ul>
    );
  }

}

ReactDOM.render(
  <List />,
  document.querySelector('#root')
);
