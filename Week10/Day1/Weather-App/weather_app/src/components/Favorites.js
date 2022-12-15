import { useContext } from "react";
import { AppContext } from "../App";


const Favorites = (props) => {

    const {favorites} = useContext(AppContext);

    console.log(favorites);
    return(
        <div className="forecastDiv">
            <div >
                {
                    favorites.map((item, i) => {
                        return(
                            <div key={i} className="forecast">
                                <h4>{item.city}<br/>{item.country}<br/></h4>    
                                <h4>{item.cityKey}</h4>
                                <h4>{item.currentWeather[0].Temperature.Metric.Value}</h4>
                                <img alt='icon' src={`https://developer.accuweather.com/sites/default/files/${item.currentWeather[0].WeatherIcon<10?'0'+item.currentWeather[0].WeatherIcon:item.currentWeather[0].WeatherIcon}-s.png`} />
                            </div>

                        )
                    })
                }
                {/* <h3>{item.Date.substring(0,10).split('-').reverse().join('-')}</h3> */}
                {/* <h5>{item.Temperature.Minimum.Value}<span>&#176;</span>-{item.Temperature.Minimum.Value}<span>&#176;</span></h5> */}
            </div>
        </div>
    )
}

export default Favorites