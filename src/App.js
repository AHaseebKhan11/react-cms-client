import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContentIndex from './components/content/Index'

class App extends Component {
  render() {
    return (
      <div className="App-header">
        <ContentIndex />
      </div>
    );
  }
}

export default App;
