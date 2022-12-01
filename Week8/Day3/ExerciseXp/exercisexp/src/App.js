import './App.css';
// import BuggyCounter from './components/BuggyCounter';
// import ErrorBoundary from './components/ErrorBoundary';
// import Color from './components/Color';
import Child from './components/Color';

function App() {
  return (
    <div className="App">
      {/* <ErrorBoundary>
      <BuggyCounter/>
      <BuggyCounter/>
      </ErrorBoundary>
      <ErrorBoundary>
      <BuggyCounter/>
      </ErrorBoundary>
      <BuggyCounter/>
      <BuggyCounter/> */}
      {/* <Color/> */}
      <Child/>
    </div>
  );
}

export default App;
