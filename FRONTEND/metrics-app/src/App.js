
import './App.css';
import { useState, useEffect } from 'react';



let url = process.env.REACT_APP_URL;
let authorizationHeader = process.env.REACT_APP_AUTHORIZATION;

function App() {
  
  useEffect(() => {
    fetch(url + '/time', {
      headers: {
        'Authorization' : authorizationHeader
      }}
      )
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
