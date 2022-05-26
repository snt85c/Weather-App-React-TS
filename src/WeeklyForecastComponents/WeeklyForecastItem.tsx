import { IWeekly } from "../Services/APIinterface";
import WeatherIcon from "../CityComponents/WeatherIcon";
export default function WeeklyForecastItem(props: {
  data?: IWeekly;
  day: number;
  weekday: string;
}) {
  return (
    <>
      <div className="flex md:flex-col flex-row justify-center items-center gap-2 ">
        <div className="text-md md:text-xl xl:text-2xl md:-mb-4 w-20 font-extrabold">{props.weekday}</div>
        <div className="flex justify-center items-center text-md  w-20">
          {props.data?.weather[0].main}
        </div>
        <div className="w-10 h-10">
        <WeatherIcon data={props.data?.weather[0].icon}/>
        </div>
        <div >
          <div>
            {props.data ? (props.data?.temp.day - 273.15).toFixed(1) : ""}°C
          </div>
          <div className=" -mt-1 text-[0.5rem]">daily average</div>
        </div>
        <div >
          <div>
            {props.data ? (props.data?.temp.min - 273.15).toFixed(1) : ""}°C
          </div>
          <div className=" -mt-1 text-[0.5rem]">min</div>
        </div>
      </div>
      <div className="border-b-2 md:border-0 border-gray-400 w-1/5 opacity-50"></div>
    </>
  );
}
