import {useState, createContext} from 'react'
import './App.css';
import Header from './components/Header';
import './components/Autocomplete.css'



export const AppContext = createContext(null)

function App() {
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [cityKey, setCityKey] = useState('')
  const [favorites, setFavorites] = useState([])

  return (
    <AppContext.Provider value={{city,setCity,country,setCountry,cityKey,setCityKey, favorites, setFavorites}}>
      <div className="App">
        <Header/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
