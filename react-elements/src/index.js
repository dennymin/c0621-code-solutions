import React from 'react';
import ReactDOM from 'react-dom';
const hello = React.createElement(
  'h1',
  null,
  'Hello React!'
);
const aRandomDiv = document.querySelector('#root');

ReactDOM.render(hello, aRandomDiv);
