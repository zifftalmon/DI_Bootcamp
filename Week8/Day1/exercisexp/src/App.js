// import logo from './logo.svg';
import './App.css';
// import React, { Component } from 'react';
// import ReactDOM from 'react-dom/client';
// import UserFavoriteColors from './components/UserFavoriteColors';
import Exercise4 from './components/Exercise4';
import './components/Exercise4.css';



//exercise1
// const myElement = React.createElement('h1', {}, 'i dont use jsx');
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(myElement);

// exercise2
// const myNewElement = <h1>i love jsx</h1>;
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(myNewElement);

// const sum = 5+5;
// const myNewestElement = <h1>react is {sum} times better with jsx!</h1>;
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(myNewestElement);

//exercise3
// const user = {
//   first_name: 'Bob',
//   last_name: 'Dylan',
//   fav_animals : ['Horse','Turtle','Elephant','Monkey']
// };

// class User extends Component {
//   render () {
//       return(
//           <div>
//               <h3>{user.first_name}</h3>
//               <h3>{user.last_name}</h3>
//           </div>
//       )
//   }
// }

//exercise4




function App() {
  return (
    <div className="App">
        {/* <User arr={user}/> */}
        {/* <UserFavoriteColors animals={user.fav_animals}/> */}
        <Exercise4/>
    </div>
  );
}

export default App;
