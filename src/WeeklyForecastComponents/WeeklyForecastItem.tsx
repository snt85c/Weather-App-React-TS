import { IWeekly } from "../Services/APIinterface";
import { MONTH, Ordinal } from "../Services/Services";
import WeatherIcon from "../CityComponents/WeatherIcon";
export default function WeeklyForecastItem(props: {
  data: IWeekly;
  weekday: string;
  i: number;
}) {
  let date: Date = new Date();
  date.setDate(date.getDate() + props.i);

  const day: number = date.getDate();
  const month: number = date.getMonth();

  return (
    <>
      <div
        className="flex md:flex-col flex-row justify-center items-center gap-2 w-full h-[6vh] sm:h-[30vh] px-2"
      >
        <div className=" flex flex-col text-[3vw] md:text-[1.5vw] font-bold justify-center items-center w-1/2">
          <div>{props.weekday}</div>
          <div className="flex whitespace-nowrap justify-center items-center text-[2.8vw] md:text-[.9vw] -mt-1 md:-my-1 font-normal ">
            {day}
            {Ordinal(day)}
            {" of "}
            {MONTH[month]}
          </div>
        </div>

        <div className="flex justify-center items-center text-[3vw] md:text-[1.2vw] font-bold w-1/4 sm:-mb-3">
          {props.data?.weather[0].main}
        </div>

        <div className="flex justify-center items-center md:-my-4 w-[10vw] sm:w-[6vw]  h-[10vw] sm:h-[6vw]">
          <WeatherIcon data={props.data?.weather[0].icon} />
        </div>
        <div className="w-1/4 sm:-mt-2">
          <div className="flex justify-center items-center text-[3vw] md:text-[1.5vw] md:font-extrabold">
            {props.data ? (props.data?.temp.day - 273.15).toFixed(1) : ""}°C
          </div>
          <div className="flex justify-center items-center -mt-2 text-[2.8vw] md:text-[.9vw] w-full ">
            max
          </div>
        </div>
        <div className="w-1/4 sm:-mt-2">
          <div className="flex justify-center items-center text-[3vw] md:text-[1.5vw] md:font-extrabold">
            {props.data ? (props.data?.temp.min - 273.15).toFixed(1) : ""}°C
          </div>
          <div className="flex justify-center items-center -mt-2 text-[2.8vw] md:text-[.9vw] w-full ">
            min
          </div>
        </div>
        <div className="w-1/4 sm:-mt-2">
          <div className="flex justify-center items-center text-[3vw] md:text-[1.5vw] md:font-extrabold">
            {(props.data && props.data?.pop * 100).toFixed(0)}%
          </div>
          <div className="flex justify-center items-center -mt-2 text-[2.8vw] md:text-[.9vw] w-full ">
            rain
          </div>
        </div>
      </div>
      <div className="last:border-0 border-b-2 md:border-0 border-gray-400 w-1/2 opacity-50"></div>
    </>
  );
}
