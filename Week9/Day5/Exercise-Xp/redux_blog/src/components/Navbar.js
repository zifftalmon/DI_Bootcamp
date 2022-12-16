import {Routes, Route, Link} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Post from './Post';
import '../style.css'


const Navbar = (props) => {

    return(
    <>
            <nav>
        <div className='nav'>
            <h1><Link style={{textDecoration:'none', color:'white'}} to='/'>My Blog</Link></h1>
            <ul>
                <li><Link style={{textDecoration:'none', color:'white'}} to='/home/*'>Home</Link></li>
                <li><Link style={{textDecoration:'none', color:'white'}} to='/about'>About</Link></li>
                <li><Link style={{textDecoration:'none', color:'white'}} to='/contact'>Contact</Link></li>
            </ul>
        </div>
            </nav>

            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path='/home/*' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/home/post_/*' element={<Post/>}/>
            </Routes>
    </>
    )
}

export default Navbar