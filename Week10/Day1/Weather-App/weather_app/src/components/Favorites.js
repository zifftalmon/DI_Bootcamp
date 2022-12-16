import { useContext } from "react";
import { AppContext } from "../App";


const Favorites = (props) => {

    const {favorites} = useContext(AppContext);
    return(
        <>
            <h1>Favorites</h1>
            <div className="forecastDiv">
                {
                    favorites.map((item, i) => {
                        return(
                            <div key={i} className="forecast">
                                <h4>{item.city},<br/>{item.country}</h4>    
                                <h4>{item.currentWeather[0].Temperature.Metric.Value}<span>&#176;</span></h4>
                                <img alt='icon' src={`https://developer.accuweather.com/sites/default/files/${item.currentWeather[0].WeatherIcon<10?'0'+item.currentWeather[0].WeatherIcon:item.currentWeather[0].WeatherIcon}-s.png`} />
                                {/* <h5>{item.Temperature.Minimum.Value}<span>&#176;</span>-{item.Temperature.Minimum.Value}<span>&#176;</span></h5> */}
                            </div>

                        )
                    })
                }
                {/* <h3>{item.Date.substring(0,10).split('-').reverse().join('-')}</h3> */}
            </div>
        </>
    )
}

export default Favorites