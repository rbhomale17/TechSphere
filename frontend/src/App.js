import './App.css';
import HomePage from './Components/HomePage';
import Interview from './Components/Interview';
import ChatInterface from './Components/test';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      {/* <HomePage /> */}
      <Interview category={"NodeJS"} />
      {/* {<ChatInterface />} */} 
    </div>
  );
}

export default App;
