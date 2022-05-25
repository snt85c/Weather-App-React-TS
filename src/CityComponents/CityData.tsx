import Clock from "./Clock";
import CurrentTemp from "./CurrentTemp";
import { OpenWeatherMapAPIdata } from "../Services/APIinterface";

export default function CityData(props: { data?: OpenWeatherMapAPIdata }) {
  return (
    <>
      <div className="p-4">
        <div className="text-2xl md:text-5xl font-extrabold">
          {props.data?.geo[0].name}
        </div>
        <CurrentTemp data={props.data?.weather.current.temp} />
        <div className="flex flex-row items-center">
          <div>{props.data?.geo[0].country}</div>
          <img
            className="h-3 w-5 ml-1"
            src={`https://flagcdn.com/w20/${props.data?.geo[0].country.toLowerCase()}.png`}
          />
        </div>
        <Clock data={props.data?.weather.timezone} />
        <div className="text-xl md:text-4xl">
          {props.data?.weather.current.weather[0].main}
        </div>
        <div>{props.data?.weather.current.weather[0].description}</div>
        <img className="w-20 h-20 md:w-32 md:h-32" src={`https://openweathermap.org/img/wn/${props.data?.weather.current.weather[0].icon}@4x.png`} />
      </div>
    </>
  );
}
