import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.counter = 0;
    this.state = { clickCount: this.counter };
  }

  handleClick() {
    this.setState({ clickCount: this.counter++ });
  }

  render() {
    let clickColor = null;
    if (this.counter < 3) {
      clickColor = 'dark-background white-text';
    } else if (this.counter >= 3 && this.counter < 6) {
      clickColor = 'purple-background white-text';
    } else if (this.counter >= 6 && this.counter < 9) {
      clickColor = 'red-background white-text';
    } else if (this.counter >= 9 && this.counter < 12) {
      clickColor = 'orange-background';
    } else if (this.counter >= 12 && this.counter < 15) {
      clickColor = 'yellow-background';
    } else if (this.counter >= 15) {
      clickColor = 'white-background';
    }
    return <button className={clickColor} onClick={this.handleClick}>Hot Button</button>;
  }
}
