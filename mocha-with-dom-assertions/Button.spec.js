import Button from '../lib/Button';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

describe('Button', () => {
  it('is a button', () => {
    const button = TestUtils.renderIntoDocument(<Button />);
    const node = ReactDOM.findDOMNode(button);

    expect(node).toExist();
    expect(node.tagName).toBe('DIV');
  });

  it('has a class name', () => {
    const button = TestUtils.renderIntoDocument(<Button />);
    const node = ReactDOM.findDOMNode(button);

    expect(node.className).toBe('button');
  });

  it('has an internal contents container', () => {
    const button = TestUtils.renderIntoDocument(
      <Button>Contents Here!</Button>
    );

    // Grab contents, assert on inner text
    const contents = ReactDOM.findDOMNode(button).querySelector(
      '.button-contents'
    );

    expect(contents.textContent).toBe('Contents Here!');
    expect(contents.innerHTML).toBe('Contents Here!');
  });

  it('has click behavior', () => {
    let clicked = false;
    const onClick = () => { clicked = true; };

    const button = TestUtils.renderIntoDocument(<Button onClick={onClick} />);

    expect(clicked).toBe(false);

    // Must use TestUtils.Simulate to send a React click event to the component
    TestUtils.Simulate.click(ReactDOM.findDOMNode(button));

    expect(clicked).toBe(true);
  });
});
