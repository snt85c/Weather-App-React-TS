import Clock from "./Clock";
import CurrentTemp from "./CurrentTemp";
import WeatherIcon from "./WeatherIcon";
import FeelsLike from "./FeelsLike";
import Humidity from "./Humidity";
import ChanceOfRain from "./ChanceOfRain";
import { OpenWeatherMapAPIdata } from "../Services/APIinterface";
import WindSpeed from "./WindSpeed";

export default function CityData(props: { data?: OpenWeatherMapAPIdata }) {
  return (
    <>
      <div className="flex flex-row">
        <div className=" pt-0 p-4 md:p-4 xl:pl-10 w-1/2 duration-300">
          <div className="text-3xl md:text-5xl font-extrabold">
            {props.data?.geo[0].name}
          </div>
          <CurrentTemp data={props.data?.weather.current.temp} />
          <div className="flex flex-row items-center gap-2">
            <div>{props.data?.geo[0].country}</div>
            <img
              className="h-3 w-5"
              src={`https://flagcdn.com/w20/${props.data?.geo[0].country.toLowerCase()}.png`}
              alt=""
            />
            <Clock data={props.data?.weather.timezone} />
          </div>
          <div className="text-xl md:text-4xl">
            {props.data?.weather.current.weather[0].main}
          </div>
          <div>{props.data?.weather.current.weather[0].description}</div>
          <div className="w-16 h-16">
            <WeatherIcon data={props.data?.weather.current.weather[0].icon} />
          </div>
        </div>
        <div className="flex flex-col gap-2 p-4 pr-0 pt-0 pl-16 md:p-4 xl:pr-10 w-1/2 duration-300">
          <FeelsLike data={props.data?.weather.current.feels_like} />
          <Humidity data={props.data?.weather.current.humidity} />
          <ChanceOfRain data={props.data?.weather.hourly[0].pop} />
          <WindSpeed data={props.data?.weather.current.wind_speed} />
        </div>
      </div>
    </>
  );
}
