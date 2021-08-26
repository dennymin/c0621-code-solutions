import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function GenerateList(props) {
  const poke = props.poke;
  const pokeList = poke.map(entry =>
  <li key={entry.number}>
    {entry.name}
  </li>);
  return (
    <ul>{pokeList}</ul>
  );
}

ReactDOM.render(
  < GenerateList poke={pokedex} />,
  document.getElementById('root')
);
