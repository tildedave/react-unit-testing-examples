import React from 'react';

export default class Button extends React.Component {
  render() {
    return (
      <div className="button" onClick={this.props.onClick}>
        <div className="button-contents">
          {this.props.children}
        </div>
      </div>
    );
  }
}

Button.propTypes = {
  onClick: React.PropTypes.func,
};
Button.defaultProps = { onClick: () => ({}) };
