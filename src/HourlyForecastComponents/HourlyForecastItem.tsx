import { useEffect, useState } from "react";
import WeatherIcon from "../CityComponents/WeatherIcon";
import { IHourly } from "../Services/APIinterface";

export default function HourlyForecastItem(props: {
  data: IHourly;
  timezone: string;
  offset: number;
}) {
  const [time, setTime] = useState<string>();
  useEffect(() => {
    let timer: Date = new Date();
    timer.setHours(timer.getHours() + props.offset);
    setTime(
      timer.toLocaleTimeString("en-GB", {
        timeZone: props.timezone,
        hour: "numeric",
        minute: "numeric",
      })
    );
  }, [props.timezone]);




  return (
    <>
      <div className="flex md:flex-col flex-row justify-center items-center gap-2 px-2 w-full h-[6vh] sm:h-[30vh]">
        <div className="flex justify-center items-center font-extrabold md:text-md xl:text-xl md:-mb-4 w-1/4 md:w-[6rem]">
          <div className="-mt-1 text-[2vw] md:text-[1vw] mr-2">+{props.offset}</div>
          <span className="text-[3vw] md:text-[1.5vw]">{time}</span>
        </div>

        <div className="flex justify-center items-center w-1/5 sm:w-1/2  h-1/5 sm:h-1/2">
          <WeatherIcon data={props.data?.weather[0].icon} />
        </div>
        <div className="flex justify-center items-center text-center font-bold text-[3vw] md:text-[1.2vw] leading-none w-1/2 sm:-mt-2">{props.data.weather[0].description}</div>

        <div className="w-1/4 md:w-full sm:-mt-2">
          <div className="flex justify-center items-center text-[3vw] md:text-[1.5vw] md:font-extrabold">
            {props.data.temp ? (props.data.temp - 273.15).toFixed(1) : ""}°C
          </div>
          <div className="flex justify-center items-center -mt-1 text-[2.8vw] md:text-[.9vw]">temp</div>
        </div>

        <div className="w-1/4 md:w-full sm:-mt-2">
          <div className="flex justify-center items-center text-[3vw] md:text-[1.5vw] md:font-extrabold">{(props.data.pop * 100).toFixed(0)}%</div>
          <div className="flex justify-center items-center -mt-1 text-[2.8vw] md:text-[.9vw]"> rain</div>
        </div>       

      </div>
      <div className="last:border-0 border-b-2 md:border-0 border-gray-400 w-1/2 opacity-50"></div>
    </>
  );
}
