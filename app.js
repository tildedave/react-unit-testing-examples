import React from 'react';
import ReactDOM from 'react-dom';
import Button from './lib/Button';

console.log(document.getElementById('body'));

const page = (
  <div>
    <h1>Buttons</h1>
    <div className="example"><Button>{'Hello Button'}</Button></div>
    <div className="example"><Button>{'Hello ☃'}</Button></div>
    <div className="example"><Button>{'Hello 😊'}</Button></div>
  </div>
);

ReactDOM.render(page, document.getElementById('body'));
