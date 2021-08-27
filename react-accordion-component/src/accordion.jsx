import React from 'react';
export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.generateList = this.GenerateList.bind(this);
    this.state = {
      reveal: true
    };
    this.information = this.props.topics;
    // this.information = [
    //   { number: 1, name: 'Hypertext Markup Language', description: 'test' },
    //   { number: 2, name: 'Cascading Style Sheets', description: 'test' },
    //   { number: 3, name: 'JavaScript', description: 'test' }
    // ];
  }

  handleClick(event) {
    console.log(this.props);
    console.log(this.props.topics);
    console.log(this.information);
  }

  GenerateList(props) {
    const topics = this.information;
    const topicsList = topics.map(topic =>
      <div key={topic.number}>
        <h3 className='info-title'>{topic.name}</h3>
        <div>{topic.description}</div>
      </div>
    );
    return (
      <div>{topicsList}</div>
    );
  }

  render() {
    return (
    // <div className='page flex-wrap'>
    //   <div className='info-container flex-wrap flex-basis-100'>
    //     <h3 onClick={this.handleClick} className='info-title flex-basis-100'>Hypertext Markup Language</h3>
    //     <div className='info-body flex-basis-100'>Text</div>
    //   </div>

    //   <div className='info-container flex-wrap flex-basis-100'>
    //     <h3 onClick={this.handleClick} className='info-title flex-basis-100'>Cascading Style Sheets</h3>
    //     <div className='info-body flex-basis-100'>Text</div>
    //   </div>

    //     <div className='info-container flex-wrap flex-basis-100'>
    //       <h3 onClick={this.handleClick} className='info-title flex-basis-100'>JavaScript</h3>
    //       <div className='info-body flex-basis-100'>Text</div>
    //     </div>
    //   </div>
      // < this.GenerateList/>
      <h1 onClick={this.handleClick}>hi</h1>
    );
  }
}
