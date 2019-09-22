import React, { Component } from 'react';
import './App.css';
import WordCard from './WordCard';
const word = "HELLO";
class App extends Component {
  reload(){
    window.location.reload(true)
  }
  render() {
    return (
    <div className="App">
      <div className="font">My Card Game </div>  
      <div id="textShow" className="font2"></div>
      <WordCard value={word}/>
      <div id="Win" className="font2"></div>
      <input type="button" className="button" value="Reset Game" onClick={this.reload}/>
      <div className="toMarginTop">Alameen Da-Oh 6035512018</div>      
    </div>
    );
  }
}
export default App