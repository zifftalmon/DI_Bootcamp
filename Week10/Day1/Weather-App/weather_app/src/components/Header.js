import {Routes, Route, Link} from 'react-router-dom'
import Autocomplete from './Autocomplete';
import Favorites from './Favorites';
import 'tachyons'

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
        <button className='grow'>Home</button>
        </Link>
        <Link to='/favorites'>
        <button className='grow'>Favorites</button>
        </Link>
        </div>
        </div>

        <Routes>
            <Route exact path='/'/>
            <Route path='/home' element={<Weather/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
        </Routes>
        </>
    )
}

export default Header