import React from 'react';
import ReactDOM from 'react-DOM';
import Accordion from './accordion';

const information = [
  { number: 1, name: 'Hypertext Markup Language', description: 'The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript. ... HTML elements are delineated by tags, written using angle brackets.' },
  { number: 2, name: 'Cascading Style Sheets', description: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.' },
  { number: 3, name: 'JavaScript', description: 'JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.' }
];

ReactDOM.render(
  <Accordion topics={information}/>,
  document.querySelector('#root')
);
