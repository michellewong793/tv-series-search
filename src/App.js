import React, { Component } from 'react';
import Form from './components/Form'
import './App.css';
import Main from './components/Main';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            <a href="/">
            Search for your favorite TV series! 
            </a>
          </h1>
          <Main/>
        </header>
      </div>
    );
  }
}



export default App;
