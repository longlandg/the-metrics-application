
import './App.css';
import { useState, useEffect } from 'react';

let url='http://localhost:8001/time'

function App() {
  
  useEffect(() => {
    fetch(url)
    .then((response) => response.text())
    .then(data => { console.log(data)
    }).catch((error) => {
      console.error('Error:', error);
    });  
  });


  return (
    <div className="App">
      <header className="App-header">
       <p>hello</p>
      </header>
    </div>
  );
}

export default App;
