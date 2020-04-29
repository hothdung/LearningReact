import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {

  constructor(props) {
    super(props);
    super.state = {
      user: {}
    };

    this.onSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {

    fetch('/testAPI', {
      method: 'POST',
      data: {
        name: this.refs.name,
        job: this.refs.job
      }
    }).then(function (res) {
      return res.json()
    }).then(function (body) {
      console.log(body);
    })

    e.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <p className="App-intro">
            {this.state.apiResponse}
          </p>
        </header>
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder="Name" ref="name" />
          <input type="text" placeholder="Job" ref="job" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
