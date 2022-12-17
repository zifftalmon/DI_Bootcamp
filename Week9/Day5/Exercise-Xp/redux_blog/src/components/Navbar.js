import {Link} from 'react-router-dom'
// import Home from './Home';
// import About from './About';
// import Contact from './Contact';
import '../style.css'


const Navbar = (props) => {
    return(
    <>
            <nav>
        <div className='nav'>
            <h1><Link style={{textDecoration:'none', color:'white'}} to='/*'>My Blog</Link></h1>
            <ul>
                <li><Link style={{textDecoration:'none', color:'white'}} to='/home/'>Home</Link></li>
                <li><Link style={{textDecoration:'none', color:'white'}} to='/about'>About</Link></li>
                <li><Link style={{textDecoration:'none', color:'white'}} to='/contact'>Contact</Link></li>
            </ul>
        </div>
            </nav>
    </>
    )
}

export default Navbar