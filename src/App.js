import React, { Component, Fragment } from 'react';
import './App.css';

import Header from './Header';

function App() {
  return (
    <div className="app">
      <Fragment>
            <Header />
      </Fragment>
      <div className="App-header">
        <div className="clipped-box">
          <div className="content">
              <h1>Luke DeGoes</h1>
              <h2>Computer Science Student at UTSA</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
