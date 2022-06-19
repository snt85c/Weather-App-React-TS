import { OpenWeatherMapAPIdata } from "../Services/APIinterface";
import WeeklyForecastItem from "./WeeklyForecastItem";
import { DAYS } from "../Services/Services";

export default function WeeklyForecast(props: {
  data?: OpenWeatherMapAPIdata;
}) {

  let weekday: number = new Date().getDay();
  let result = props.data?.weather.daily.map((data, i) => {
    weekday++;
    if (weekday > 6) {
      weekday = 0;
    }
    if (i > 0) {
      //avoid showing day 0 (today)
      return (
          <WeeklyForecastItem data={data} key={i} weekday={DAYS[weekday]} i={i} />
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
