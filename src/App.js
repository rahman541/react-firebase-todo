import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Note from './Note/Note'

class App extends Component {
  render() {
    return (
      <div>
        <h1>React & Firebase To Do List</h1>
        <Note />
      </div>
    );
  }
}

export default App;
