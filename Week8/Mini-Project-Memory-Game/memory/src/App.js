import './App.css';
import Heroes from './components/Heroes';
import heroes from './components/heroData';

function App() {
  return (
    <div className="App">
      <Heroes heroes={heroes.superheroes}/>
    </div>
  );
}

export default App;
