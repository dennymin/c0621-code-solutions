import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const images = [
  { key: 1, url: '../carousel-images/bulbasaur.png' },
  { key: 2, url: '../carousel-images/charmander.jpg' },
  { key: 3, url: '../carousel-images/jigglypuff.png' },
  { key: 4, url: '../carousel-images/pikachu.jpg' },
  { key: 5, url: '../carousel-images/squirtle.jpg' }
];

ReactDOM.render(
  < Carousel images={images}/>,
  document.querySelector('#root')
);
