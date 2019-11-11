import React, { Component } from 'react';
import UserOutput from './UserOutput/UserOutput'
import './App.css';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    usernames: [
      { username: "john" },
      { username: "bill" }
    ]
  }

  switchUsername = event => {
    this.setState({
      usernames: [
        { username: event.target.value },
        { username: "bill" }
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      margin: '16px'
    };

    return (
      <div className="App">
        <UserInput style={style} changed={this.switchUsername} username={this.state.usernames[0].username}/>
        <UserOutput username={this.state.usernames[0].username}/>
        <UserOutput username={this.state.usernames[1].username}/>
      </div>
    );
  }
}

export default App;
