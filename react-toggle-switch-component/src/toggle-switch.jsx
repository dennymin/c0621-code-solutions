import React from 'react';

export default class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { clicked: false };
  }

  handleClick() {
    if (this.state.clicked) {
      this.setState({ clicked: false });
    } else {
      this.setState({ clicked: true });
    }
  }

  render() {
    let text = null;
    let switchClass = null;
    let circleClass = null;
    if (this.state.clicked) {
      text = 'on';
      switchClass = 'switch on-background';
      circleClass = 'circle on-position';
    } else {
      text = 'off';
      switchClass = 'switch off-background';
      circleClass = 'circle';
    }
    return (
      <div className='flex'>
        <div className={switchClass} onClick={this.handleClick}>
          <div className={circleClass} />
        </div>
        <h1> {text} </h1>
      </div>
    );
  }
}
