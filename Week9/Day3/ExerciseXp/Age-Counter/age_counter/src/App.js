import {connect} from 'react-redux'
import { ageUp, ageDown } from './redux/actions';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <h2>your age: {props.age}</h2>
      <button onClick={props.ageUp} style={{margin:'1em'}}>age up</button>
      <button onClick={props.ageDown} style={{margin:'1em'}}>age down</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    age: state.age
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ageUp: () => dispatch(ageUp()),
    ageDown: () => dispatch(ageDown())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
