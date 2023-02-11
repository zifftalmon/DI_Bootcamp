import './App.css';
import Map from './components/Map';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <div className='buttonDiv'>
        <Button city='Tel Aviv'/>
        <Button city='Haifa'/>
        <Button city='Jerusalem'/>
      </div>
      <Map/>
    </div>
  );
}

export default App;
