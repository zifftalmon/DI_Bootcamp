import { useState, useContext } from "react";
import { AppContext } from "../App";
import cities from './Autocomplete.json'
import Forecast from "./Forecast";
import CurrentWeather from "./CurrentWeather";
import './Autocomplete.css'
import 'tachyons'


const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const Autocomplete = (props) => {
    const [suggestions, setSeuggestions] = useState([])
    const {setCity, setCityKey, setCountry} = useContext(AppContext)

    const getSuggestions = (value) => {
        fetch(`${BASE_URL}/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${value}`)
        .then(res => res.json())
        .then(data => {
            setSeuggestions(data)
        })
        .catch(err => {
            console.log(err);
        })
        setSeuggestions(cities)
    }
    
    return(
        <div className="autocomplete">
            <input type='text' onChange={(e) => getSuggestions(e.target.value)}/>
            <ul>
                {
                    suggestions.map(item => {
                        return(
                            <div className="cityList" key={item.Key}>
                            <li className="grow" onClick={() => {
                                setCityKey(item.Key);
                                setCity(item.LocalizedName);
                                setCountry(item.Country.LocalizedName);
                                setSeuggestions([])
                            }} key={item.Key}>
                                {item.LocalizedName},<br/>{item.Country.LocalizedName}
                            </li>
                        </div>
                        )
                    })
                }
            </ul>
                <CurrentWeather/>
                <Forecast/>
        </div>
    )
}

export default Autocomplete