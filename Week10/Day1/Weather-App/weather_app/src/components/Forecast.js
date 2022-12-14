import { useState, useEffect, useContext } from "react";
import { AppContext } from "../App";
import forecasts from './Forecst.json'
import 'tachyons'


const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const Forecast = (props) => {
    const [forecast, setForecast] = useState([]);
    const {city, cityKey, country} = useContext(AppContext);


useEffect(() => {
    if(cityKey) {
        getForecast(cityKey)
    }
},[cityKey])

const getForecast = (key) => {
    // fetch(`${BASE_URL}/forecasts/v1/daily/5day/${key}?apikey=${API_KEY}`)
    // .then(res => res.json())
    // .then(data => {
        setForecast(forecasts);
    // })
    // .catch(err => {
    //     console.log(err);
    // })
}    
    if(forecast.length === 0) return null;
    
    console.log(forecast);

    return (
        <>
        <div className="forecastDiv">
            {
                forecast.map(item => {
                    console.log(item);
                    return(
                        <div className="forecast" key={item.EpochDate}>
                            <h4>{city},<br/>{country}</h4>    
                            <h4>{item.Day.IconPhrase}</h4>
                            <img src={`https://developer.accuweather.com/sites/default/files/${forecast[0].Day.Icon<10?'0'+forecast[0].Day.Icon:forecast[0].Day.Icon}-s.png`} />
                            <h3>{item.Date.substring(0,10).split('-').reverse().join('-')}</h3>
                            <h5>{item.Temperature.Minimum.Value}<span>&#176;</span>-{item.Temperature.Minimum.Value}<span>&#176;</span></h5>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}


export default Forecast