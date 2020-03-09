import React from 'react';
import TagCloud from 'react-tag-cloud';
import randomColor from 'randomcolor'; 
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <TagCloud 
      className="tag-cloud"
        style={{
          fontFamily: 'sans-serif',
          fontSize: 30,
          fontWeight: 'bold',
          fontStyle: 'italic',
          color: () => randomColor(),
          padding: 5,
          flex:1
        }}>
        <div style={{fontSize: 50}}>react</div>
        <div style={{color: 'green'}}>tag</div>
        <div rotate={90}>cloud</div>
        <div>Happiness</div>
        <div>Pleasure</div>
        <div>Fury</div>
      </TagCloud>
    </div>
  );
}

export default App;
