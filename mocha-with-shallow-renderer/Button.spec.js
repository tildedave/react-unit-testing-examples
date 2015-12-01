import Button from '../lib/Button';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

describe('Button', () => {
  it('is a button', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Button />);
    const button = renderer.getRenderOutput();

    expect(button.type).toBe('div');
  });

  it('has a class name', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Button />);
    const button = renderer.getRenderOutput();

    expect(button.props.className).toBe('button');
  });

  it('has an internal contents container', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Button>Contents Here!</Button>);
    const button = renderer.getRenderOutput();

    expect(button.props.children).toEqual(
      <div className="button-contents">Contents Here!</div>
    );
  });

  it('has click behavior', () => {
    let clicked = false;
    const onClick = () => { clicked = true; };

    const renderer = TestUtils.createRenderer();
    renderer.render(<Button onClick={onClick} />);
    const button = renderer.getRenderOutput();

    expect(clicked).toBe(false);

    // Directly invoke the click handler - this trusts React to do its job in
    // wiring up the synthetic event
    button.props.onClick();

    expect(clicked).toBe(true);
  });
});
