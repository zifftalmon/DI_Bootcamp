import { useState, useEffect, useContext } from "react";
import { AppContext } from "../App";
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
    fetch(`${BASE_URL}/forecasts/v1/daily/5day/${key}?apikey=${API_KEY}`)
    .then(res => res.json())
    .then(data => {
        setForecast(data.DailyForecasts);
    })
    .catch(err => {
        console.log(err);
    })
}    
    if(forecast.length === 0) return null;
    
    console.log(forecast);

    return (
        <>
        <div style={{display:'flex', justifyContent:'center'}}>
            {
                forecast.map(item => {
                    console.log(item);
                    return(
                        <div className="ma3" key={item.EpochDate}>
                            <h3>{city}<br/>{country}</h3>    
                            <h3>{item.Day.IconPhrase}</h3>
                            <img src={`https://developer.accuweather.com/sites/default/files/${forecast[0].Day.Icon<10?'0'+forecast[0].Day.Icon:forecast[0].Day.Icon}-s.png`} />
                            <h4>{item.Date}</h4>
                            <h5>day</h5>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}


export default Forecast