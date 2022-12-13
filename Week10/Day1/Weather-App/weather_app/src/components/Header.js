import {Routes, Route, Link} from 'react-router-dom'
import Autocomplete from './Autocomplete';


const Header = () => {
    const Weather = () => {
        return(
            <>
            <hr/>
            <Autocomplete/>
            </>
        )
    } 

    return (
        <>
        <div className='nav'>
        <h1>Weather app</h1>
        <div>
        <Link to='/home'>
        <button>Home</button>
        </Link>
        <Link to='/favorites'>
        <button>Favorites</button>
        </Link>
        </div>
        </div>

        <Routes>
            <Route exact path='/'/>
            <Route path='/home' element={<Weather/>}/>
            <Route path='/Favorites'/>
        </Routes>
        </>
    )
}

export default Header