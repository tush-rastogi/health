import Patient from './patient';
import Sidebar from './Sidebar';
import Form from './Form';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      

     <div className="main">
    <Sidebar/>

    <Form/>

    <Patient/>

    </div>
    </div>
  );
}

export default App;
