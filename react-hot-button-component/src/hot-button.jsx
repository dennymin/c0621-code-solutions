import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { clickCount: 0 };
  }

  handleClick() {
    const clicked = this.state.clickCount + 1;
    this.setState({ clickCount: clicked });
  }

  render() {
    let clickColor = null;
    const counter = this.state.clickCount;
    if (counter < 3) {
      clickColor = 'dark-background white-text';
    } else if (counter >= 3 && counter < 6) {
      clickColor = 'purple-background white-text';
    } else if (counter >= 6 && counter < 9) {
      clickColor = 'red-background white-text';
    } else if (counter >= 9 && counter < 12) {
      clickColor = 'orange-background';
    } else if (counter >= 12 && counter < 15) {
      clickColor = 'yellow-background';
    } else if (counter >= 15) {
      clickColor = 'white-background';
    }
    return <button className={clickColor} onClick={this.handleClick}>Hot Button</button>;
  }
}
