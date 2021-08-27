import React from 'react';
export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      openIndex: null
    };
    this.information = this.props.topics;
  }

  handleClick(event) {
    if (event.target.className.includes('info-title')) {
      this.setState({ openIndex: event.target.getAttribute('data-index') });
    }
    if (this.state.openIndex === event.target.getAttribute('data-index')) {
      this.setState({ openIndex: null });
    }
  }

  render() {
    const currentView = 'info-body';
    const hiddenView = 'info-body hidden';
    const topics = this.information;
    const topicsList = topics.map(topic =>
      <div key={topic.number} data-index={topic.number}>
        <h3 className='info-title' onClick={this.handleClick} data-index={topic.number}>{topic.name}</h3>
        <div className={this.state.openIndex === topic.number.toString() ? currentView : hiddenView}>{topic.description}</div>
      </div>
    );
    return (
      topicsList
    );
  }
}
