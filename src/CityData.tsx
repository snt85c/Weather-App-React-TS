import { OpenWeatherMapAPIdata } from "./APIinterface";
  
export default function CityData(data:OpenWeatherMapAPIdata) {
  return (
    <>
      <div className="p-4">
        <div className="text-5xl font-extrabold">{data?.geo[0].name}</div>
        <div>{data.geo[0].country}</div>
        <div>{data.weather.current.weather[0].main}</div>
        <div>{data.weather.current.weather[0].description}</div>
      </div>
    </>
  );
}
