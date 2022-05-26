import { OpenWeatherMapAPIdata } from "../Services/APIinterface";
import WeeklyForecastItem from "./WeeklyForecastItem";

export default function WeeklyForecast(props: {
  data?: OpenWeatherMapAPIdata;
}) {
  let result = props.data?.weather.daily.map((data, i) => {
    return <WeeklyForecastItem data={data} day={0} />;
  });
  return (
    <>
      <div className="flex flex-col md:flex-row">{result}</div>
    </>
  );
}
