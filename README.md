# react-unit-testing-examples

Some examples of testing patterns that I'm aware of for unit testing your React components.

The way I'm most familiar with (the "nobody ever got fired for buying IBM" approach - boring, works, kind of inelegant at times) involves using a DOM, either with jsdom or a real browser such as karma, and using certain HTML5 attributes such as `querySelector`, `classList`, `textContent`, to do your asserts.

Shallow rendering is a newer method of testing React components that takes advantage of the React Virtual DOM.  You don't need a DOM and so you can run your tests in isolation, they'll be a lot faster, etc.

Shallow Renderer: https://facebook.github.io/react/docs/test-utils.html#shallow-rendering
 * [Accessing the mounted instance with the shallow renderer](https://github.com/facebook/react/issues/4056)

Still TODO:
* tests using `findRenderedComponentWithType`
* tests using jest
* set up karma w/browserify or webpack
