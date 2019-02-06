import React, { Component } from 'react';
import Header from './component/Header'
import Contents from './component/Contents'
import Footer from './component/Footer';
import './App.css';

class App extends Component {

  render() {

  return(
    <div>
      <Header/>
      <Contents/>
      <Footer/>
    </div>
  )

  }

}

export default App;
