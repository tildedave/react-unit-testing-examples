import Button from '../lib/Button';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

describe('Button', () => {
  it('is a button', () => {
    const button = TestUtils.renderIntoDocument(<Button />);

    expect(ReactDOM.findDOMNode(button)).toExist();
  });

  it('has a class name', () => {
    const button = TestUtils.renderIntoDocument(<Button />);
    const node = ReactDOM.findDOMNode(button);

    expect(node.className).toBe('button');
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