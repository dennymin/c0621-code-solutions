import React from 'react';
import ReactDOM from 'react-DOM';
import Accordion from './accordion';

const information = [
  { number: 1, name: 'Hypertext Markup Language', description: 'test' },
  { number: 2, name: 'Cascading Style Sheets', description: 'test' },
  { number: 3, name: 'JavaScript', description: 'test' }
];

ReactDOM.render(
  <Accordion topics={information}/>,
  document.querySelector('#root')
);
