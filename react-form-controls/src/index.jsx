import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { email: '' };
  }

  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(`state: ${this.state.email}`);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="Email">Email</label>
        <input value={this.state.email} type="text" id="Email" onChange={this.handleChange}>

        </input>
        <button>
          Sign Up
        </button>
      </form>
    );
  }
}

ReactDOM.render(
  <NewsletterForm />,
  document.querySelector('#root')
);
