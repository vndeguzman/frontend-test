import React, { Component } from 'react';
import { Header, Footer } from './components/common';

import './app.css';

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <div id="content">
          // Stuff goes here
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;