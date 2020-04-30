import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      job: ""
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    fetch('http://147.46.215.219:5000/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: "Tina",
        job: "body builder"
      }),
    }).then(res =>res.json()).then(data => console.log(data)).catch(error =>
      console.log(error))
  }

  render() {
    return (
      <div className="user">
        <form>
          <input type="submit" onClick={this.handleClick} />
        </form>
      </div>
    );
  }
}

export default App;
