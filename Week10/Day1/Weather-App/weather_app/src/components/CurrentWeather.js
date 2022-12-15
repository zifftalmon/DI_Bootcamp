import { useContext, useEffect, useState, createContext } from "react";
import { AppContext } from "../App";
import conditions from './CurrentWeather.json'

const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const favoritesContext = createContext(null)

const CurrentWeather = (props) => {
    const [currentWeather, setCurrentWeather] = useState([]);
    const {city, cityKey, country, setFavorites} = useContext(AppContext);


    useEffect(() => {
        if(cityKey) {
            getCurrentWeather(cityKey)
        }
    },[cityKey])

    const getCurrentWeather = (key) => {
        // fetch(`${BASE_URL}/currentconditions/v1/${key}?apikey=${API_KEY}`)
        // .then(res => res.json())
        // .then(data => {
            setCurrentWeather(conditions)
        // })
        // .catch(err=> {
        //     console.log(err);
        // })
    }
    if(currentWeather.length === 0) return null;

    const addToFavorites = () => {
        setFavorites(favorites => [...favorites,{city,cityKey,country,currentWeather}])
        
    }
    return (
        <>
            <div className="weatherDiv">
                <div className="cityWeather">
                    <img alt='icon' src={`https://developer.accuweather.com/sites/default/files/${currentWeather[0].WeatherIcon<10?'0'+currentWeather[0].WeatherIcon:currentWeather[0].WeatherIcon}-s.png`} />
                    <h4>{city}<br/>{country} <p>{currentWeather[0].Temperature.Metric.Value}</p></h4>
                </div>
                    <button onClick={() => addToFavorites()}>Add to Favorites</button>
            </div>
                <h1>{currentWeather[0].WeatherText}</h1>
              
        </>
    )
}

export default CurrentWeather 