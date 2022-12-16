import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
// import conditions from './CurrentWeather.json'

const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const CurrentWeather = (props) => {
    const [currentWeather, setCurrentWeather] = useState([]);
    const [favoriteIcon, setFavoritesIcon] = useState('❤')
    const { city, cityKey, country, favorites ,setFavorites } = useContext(AppContext);


    useEffect(() => {
        if(cityKey) {
            getCurrentWeather(cityKey)
        }
    },[cityKey])

    const getCurrentWeather = (key) => {
        fetch(`${BASE_URL}/currentconditions/v1/${key}?apikey=${API_KEY}`)
        .then(res => res.json())
        .then(data => {
            setCurrentWeather(data)
        })
        .catch(err=> {
            console.log(err);
        })
    }

    const addToFavorites = () => {
            setFavorites(favorites => [...favorites,{city,cityKey,country,currentWeather}])
            
    }


    if(currentWeather.length === 0) return null;

    

    return (
        <>
            <div className="weatherDiv">
                <div className="cityWeather">
                    <img alt='icon' src={`https://developer.accuweather.com/sites/default/files/${currentWeather[0].WeatherIcon<10?'0'+currentWeather[0].WeatherIcon:currentWeather[0].WeatherIcon}-s.png`} />
                    <h4>{city}<br/>{country} <p>{currentWeather[0].Temperature.Metric.Value}<span>&#176;</span></p></h4>
                </div>
                    <button onClick={addToFavorites}><h1>{favoriteIcon}</h1>Add to Favorites</button>
            </div>
                <h1>{currentWeather[0].WeatherText}</h1>
        </>
    )
}

export default CurrentWeather 