import './App.css';
import HomePage from './Components/HomePage';
import Interview from './Components/Interview';
import Navbar from './Components/Navbar';
import ChatInterface from './Components/test';
import { Routes, Route } from "react-router-dom"
import { AllPages } from "./Components/AllPages"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/interview' element={<Interview />} />
        <Route />
      </Routes>
      {/* <AllPages /> */}
    </div>
  );
}

export default App;
