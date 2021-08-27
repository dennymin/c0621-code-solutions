import React from 'react';

export default class Validate extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      current: '',
      valid: null
    };
  }

  handleChange(event) {
    this.setState({ current: event.target.value });
    if (this.state.current.length < 8) {
      this.setState({ valid: false });
    } else if (this.state.current.length >= 8) {
      this.setState({ valid: true });
    }
  }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   if (this.state.current.length < 8) {
  //     this.setState({ valid: false });
  //   } else if (this.state.current.length >= 8) {
  //     this.setState({ valid: true });
  //   }
  // }

  render() {
    let passwordResponseClass = '';
    if (this.state.valid === null) {
      passwordResponseClass = 'hidden';
    } else if (this.state.valid === true) {
      passwordResponseClass = 'fas fa-check correct-color flex-basis-10';

    } else {
      passwordResponseClass = 'fas fa-times incorrect-color flex-basis-10';
    }

    let errorMessage = '';
    if (this.state.valid === false) {
      if (this.state.current.length === 0) {
        errorMessage = 'A password is required';
      } else {
        errorMessage = 'Your password is too short';
      }
    }
    return (
      <div className="flex-wrap">
        <form
        className="flex-wrap align-items-center">
          <label htmlFor="password" className="flex-basis-100">
            Password
          </label>
          <input
          name="password"
          type="password"
          id="password"
          value={this.state.current}
          onChange={this.handleChange}
          className="flex-basis-50"
          />
          <i className={passwordResponseClass} />
        </form>
        <p className="flex-basis-100 incorrect-color">{errorMessage}</p>
      </div>
    );
  }
}
