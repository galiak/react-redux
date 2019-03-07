// import React and ReactDOM 
import React from 'react';
import ReactDOM from 'react-dom';

/* eslint-disable no-unused-vars */
function getButtonText() {
  return 'Click on me';
}
/* eslint-enable no-unused-vars */

// create a React component
// const App = function() {
const App = () => {
  const buttonText = {text: 'Clink here'};
  const labelText = {text: 'Enter name'};
  const style = {backgroundColor: 'blue', color: 'white'};

  return (
    <div>
      <label className="label" htmlFor="name">{labelText.text}</label>
      <input id="name" type="text"/>
      <button style={style}>{buttonText.text}</button>
    </div>
  );
};

// show the React component on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
  // querySelector is js native
);