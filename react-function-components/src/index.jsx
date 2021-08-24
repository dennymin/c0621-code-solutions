import React from 'react';
import ReactDOM from 'react-dom';

const CustomButton = () => {
  return <button>Click Me</button>;
};
// function CustomButton() {
//   return <button>Click Me</button>;
// }

var element = <CustomButton />;

ReactDOM.render(
  element,
  document.getElementById('root')
);
