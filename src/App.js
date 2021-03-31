import React from 'react'
import './App.css';
import {Admin} from 'react-admin'
function App() {
  const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

  return (
    <div className="App">
      
      <Admin dataprovider={dataProvider}/>
    </div>
  );
}

export default App;
