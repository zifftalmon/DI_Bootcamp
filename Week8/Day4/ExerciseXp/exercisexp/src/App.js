import './App.css';
// import {  Routes, Route, Link } from "react-router-dom";
import './components/List.css';
import 'tachyons';
import 'cors';
// import ErrorBoundary from './components/ErrorBoundary';
// import PostList from './components/PostList';
// import Example1 from './components/Example1';
// import Example2 from './components/Example2';
// import Example3 from './components/Example3';


//   const HomeScreen = () => (
//     <div class='tl'>
//       <h1 >home</h1>
//     </div>
//   )

// const ProfileScreen = () => (
//   <div class='tl'>
//     <h1>profile screen</h1>
//   </div>
// )

// const ShopScreen = () => {
//   throw new Error("crash!")
// }

async function myUrl () {
  try {
    const call = await fetch('https://webhook.site/2a640d8a-1e1c-465e-bba2-a1a1343eef4a', {
    mode: 'no-cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      key1: 'myusername',
      email: 'mymail@gmail.com',
      name: 'Isaac',
      lastname: 'Doe',
      age: 27
    })
  })
  console.log(call);
  }catch(e) {
    console.log(e);
  }
}

function App() {
  return (
    
    <div className="App">
      {/* <ul className='shopList'>
        <li>
          <Link to='/' class='no-underline'>Home</Link>
        </li>

        <li>
          <Link to='/profile' class='no-underline'>Profile</Link>
        </li>

        <li>
          <Link to='/shop' class='no-underline'>Shop</Link>
        </li>
      </ul>
      <ErrorBoundary>
      <Routes>
        <Route exact path='/' element={<HomeScreen/>}/>
        <Route exact path='/profile' element={<ProfileScreen/>}/>
        <Route exact path='/shop' element={<ShopScreen/>}/>
      </Routes>
      </ErrorBoundary> */}
      {/* <PostList/> */}
      {/* <Example1/>
      <Example2/>
      <Example3/> */}
      <button onClick={myUrl}>click</button>
    </div>
  );
}

export default App;
