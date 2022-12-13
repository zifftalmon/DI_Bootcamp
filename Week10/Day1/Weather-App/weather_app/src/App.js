import {useState, createContext} from 'react'
import './App.css';
import Autocomplete from './components/Autocomplete';
import CurrentWeather from './components/CurrentWeather';
import Header from './components/Header';
import './components/Autocomplete.css'



export const AppContext = createContext(null)

function App() {
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [cityKey, setCityKey] = useState('')

  return (
    <AppContext.Provider value={{city,setCity,country,setCountry,cityKey,setCityKey}}>
      <div className="App">
        <Header/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
