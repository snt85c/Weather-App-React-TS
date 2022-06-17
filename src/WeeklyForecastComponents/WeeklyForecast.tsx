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
    weekday++;
    if (weekday > 6) {
      weekday = 0;
    }
    if (i > 0) {
      //avoid showing day 0 (today)
      return (
          <WeeklyForecastItem data={data} key={i} weekday={DAYS[weekday]} />
      );
    }else{
      weekday--
      //as im skipping a day, so i should leave the counter untouched
    }
  });
  return (
    <>
      <div
        className={
          " flex flex-col justify-evenly items-center md:flex-row md:px-5 slideInAnimation"
        }
      >
        {result}
      </div>
    </>
  );
}
