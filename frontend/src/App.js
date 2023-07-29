import './App.css';
import HomePage from './Components/HomePage';
import Interview from './Components/Interview';
import Navbar from './Components/Navbar';
import ChatInterface from './Components/test';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Navbar />
      <HomePage />
      <Interview category={"NodeJS"} />
      {/* {<ChatInterface />} */} 
    </div>
  );
}

export default App;
