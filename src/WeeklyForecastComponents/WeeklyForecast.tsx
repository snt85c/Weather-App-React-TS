import { OpenWeatherMapAPIdata } from "../Services/APIinterface";
import WeeklyForecastItem from "./WeeklyForecastItem";

export default function WeeklyForecast(props: {
  data?: OpenWeatherMapAPIdata;
}) {
  const DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let weekday: number = new Date().getDay();
  let result = props.data?.weather.daily.map((data, i) => {
    weekday += 1;
    if (weekday > 6) weekday = 0;
    return (
      <WeeklyForecastItem data={data} key={i} day={0} weekday={DAYS[weekday]} />
    );
  });
  return (
    <>
      <div
        className={
          " flex flex-col justify-evenly items-center md:flex-row md:px-5 fadeInAnimation"
        }
      >
        {result}
      </div>
    </>
  );
}
