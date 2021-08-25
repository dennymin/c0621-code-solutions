import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.handleReset = this.handleReset.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.state = {
      clicked: false,
      time: 0,
      timer: null
    };
  }

  handleReset() {
    if (this.state.clicked === false) {
      this.setState({
        time: 0,
        timer: null
      });
    }
  }

  handlePlay() {
    const watchState = this.state;
    let currentTime = this.state.time + 1;
    if (watchState.clicked === false) {
      this.setState({ clicked: true });
      this.setState({
        timer: setInterval(() => {
          this.setState({ time: currentTime++ });
        }, 1000)
      });
    } else if (watchState.clicked === true) {
      this.setState({ clicked: false });
      clearInterval(this.state.timer);
    }
  }

  render() {
    let buttonClass = null;
    if (this.state.clicked === false) {
      buttonClass = 'fas fa-play top-20px';
    } else if (this.state.clicked === true) {
      buttonClass = 'fas fa-pause top-20px';
    }
    return (
    <div className='justify-content-center flex-wrap top-20px'>
      <div className='flex-basis-100 justify-content-center'>
        <div onClick={this.handleReset} className='circle justify-content-center align-items-center'>
          <h1>
            {this.state.time}
          </h1>
        </div>
      </div>

      <div className='flex-basis-100 justify-content-center'>
          <i onClick={this.handlePlay} className={buttonClass}></i>
      </div>
    </div>
    );
  }
}
