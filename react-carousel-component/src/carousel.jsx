import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.pictures = this.props.images;
    this.handleClick = this.handleClick.bind(this);
    this.startInterval = this.startInterval.bind(this);
    this.state = {
      viewing: 1,
      timer: null
    };
  }

  handleClick(event) {
    if (event.target.className.includes('fa-arrow-right')) {
      let rotateRight = this.state.viewing + 1;
      if (rotateRight > this.pictures.length) {
        rotateRight = 1;
      }
      clearInterval(this.state.timer);
      this.setState({ viewing: rotateRight });
      this.startInterval();
    } else if (event.target.className.includes('fa-arrow-left')) {
      let rotateLeft = this.state.viewing - 1;
      if (rotateLeft < 1) {
        rotateLeft = 5;
      }
      clearInterval(this.state.timer);
      this.setState({ viewing: rotateLeft });
      this.startInterval();
    }
  }

  startInterval() {
    const regularInt = setInterval(() => {
      let delay = this.state.viewing + 1;
      if (delay > this.pictures.length) {
        delay = 1;
      }
      this.setState({ viewing: delay });
    }, 3000);
    this.setState({ timer: regularInt });
  }

  componentDidMount() {
    this.startInterval();
  }

  render() {
    const circlesReflect = this.pictures.map(entry =>
      < i key={entry.key} className={this.state.viewing === entry.key ? 'fas fa-circle' : 'far fa-circle'} />
    );
    return (
      <div>
        <div className='justify-content-center align-items-center'>
          <i className="fas fa-arrow-left relative-position-right20px" onClick={this.handleClick}></i>
          <div className='image-container'>
            <img src={this.pictures[this.state.viewing - 1].url} className='contain'/>
          </div>
          <i className="fas fa-arrow-right relative-position-left20px" onClick={this.handleClick}></i>
        </div>
        <div className='justify-content-center align-items-center'>
          {circlesReflect}
        </div>
      </div>
    );
  }
}
