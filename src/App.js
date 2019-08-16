import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import {Link} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Search for your favorite TV series! 
          </h1>
           <Link to= {"/"}>Home</Link>
           <Main/>

        </header>
      </div>
    );
  }
}



export default App;
