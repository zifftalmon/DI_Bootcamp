import './App.css';
import Child from './components/Child';

function App() {
  return (
    <div className="App">
      <Child icon={'☝'} label={'Points'} number={'62,500'}/>
      <Child icon={'🎩'} label={'Hats'} number={'32,400'}/>
      <Child icon={'🔥'} label={'Campfires'} number={'76,800'}/>
      <Child icon={'💺'} label={'Seats'} number={'90,300'}/>
      <Child icon={'🦇'} label={'Bats'} number={'22,100'}/>
      <Child icon={'🖁'} label={'Phones'} number={'58,200'}/>
    </div>
  );
}

export default App;
