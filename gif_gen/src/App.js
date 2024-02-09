import logo from './logo.svg';
import './App.css';
import Tags from './components/Tags';
import Random from './components/Random';


// Pfq5pDasuvIsH2rF6QImrttqDyIWedkD




function App() {
  return (
    <div className="App">
      <h1>Random GIFs</h1>
      <div>
        <Random/>
        <Tags/>
      </div>
    </div>
  );
}

export default App;
