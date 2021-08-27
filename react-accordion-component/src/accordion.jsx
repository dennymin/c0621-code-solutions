import React from 'react';
export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.generateList = this.generateList.bind(this);
    // this.generateIndex = this.generateIndex.bind(this);
    this.state = {
      reveal: false,
      focused: null
    };
    this.information = this.props.topics;
  }

  handleClick(event) {
    const difTopics = event.target.parentElement.parentElement.children;
    if (event.target.className.includes('info-title')) {
      this.setState({ reveal: true, focused: event.target.getAttribute('data-index') });
      for (let i = 0; i < difTopics.length; i++) {
        if (difTopics[i].getAttribute('data-index') === event.target.getAttribute('data-index')) {
          difTopics[i].children[1].className = 'info-body';
        } else {
          difTopics[i].children[1].className = 'info-body hidden';
        }
      }
    }
    if (this.state.reveal === true && this.state.focused === event.target.getAttribute('data-index')) {
      event.target.nextSibling.className = 'info-body hidden';
      this.setState({ reveal: false, focused: null });
    }
    // else if (this.state.reveal === true && this.state.focused !== null) {
    //   event.target.nextSibling.className = 'info-body hidden';
    //   this.setState({ reveal: false });
    // }
  }

  generateList(props) {
    const topics = this.information;
    const topicsList = topics.map(topic =>
      <div key={topic.number} data-index={topic.number}>
        <h3 className='info-title' onClick={this.handleClick} data-index={topic.number}>{topic.name}</h3>
        <div className='info-body hidden'>{topic.description}</div>
      </div>
    );
    return (
      topicsList
    );
  }

  // generateIndex() {
  //   const indexes = [];
  //   for (let i = 0; i < this.information.length; i++) {
  //     const entry = {
  //       index: this.information.number,
  //       reveal: false
  //     };
  //     indexes.push(entry);
  //   }
  //   this.setState({ arr: indexes });
  // }

  render() {
    return (
      < this.generateList></this.generateList>
    );
  }
}
