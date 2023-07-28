import React from 'react';
import './App.css';
import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar';
import  ContextProvider  from './Contexts/CourseContext';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ContextProvider>
        <HomePage />
      </ContextProvider>
    </div>
  );
}

export default App;
