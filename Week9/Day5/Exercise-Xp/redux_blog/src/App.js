import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import {BrowserRouter, Routes, Route  } from 'react-router-dom'
// import Post from './components/Post';
import './style.css'


function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
      </div>

      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/home/*' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route psth='/post_/*'/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
