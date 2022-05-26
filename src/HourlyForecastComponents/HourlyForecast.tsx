import { OpenWeatherMapAPIdata } from "../Services/APIinterface";
import HourlyForecastItem from "./HourlyForecastItem";

export default function HourlyForecast(props: {
  data?: OpenWeatherMapAPIdata;
}) {
  let result = props.data?.weather.hourly.map((data, i) => {
    if (i < 8) {
      return <HourlyForecastItem data={data} key={i} hour={i}/>;
    }
  });
  return (
    <div className="flex flex-col justify-evenly items-center md:flex-row fadeInAnimation">
      {result}
    </div>
  );
}
