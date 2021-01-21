import React, { Component } from 'react';
import Home from './container/Home/Home'
import { BrowserRouter } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Home/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
