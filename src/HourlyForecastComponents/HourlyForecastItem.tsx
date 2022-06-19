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
      <div className="flex md:flex-col flex-row justify-center items-center gap-2 px-2 w-full">
        <div className="flex justify-center items-center font-extrabold md:text-md xl:text-xl md:-mb-4 w-1/4 md:w-[6rem]">
          <div className="-mt-1 text-[0.5rem] pr-1">+{props.offset}</div>
          {time}
        </div>

        <div className="flex justify-center items-center w-10 h-10">
          <WeatherIcon data={props.data?.weather[0].icon} />
        </div>
        <div className="flex justify-center items-center text-center text-sm leading-[1] w-1/2 ">{props.data.weather[0].description}</div>

        <div className="w-1/4 md:w-full">
          <div className="flex justify-center items-center md:text-xl md:font-extrabold">
            {props.data.temp ? (props.data.temp - 273.15).toFixed(1) : ""}°C
          </div>
          <div className="flex justify-center items-center -mt-1 text-[0.5rem]">temp</div>
        </div>

        <div className="w-1/4 md:w-full">
          <div className="flex justify-center items-center md:text-xl md:font-extrabold">{(props.data.pop * 100).toFixed(0)}%</div>
          <div className="flex justify-center items-center -mt-1 text-[0.5rem]"> rain</div>
        </div>       

      </div>
      <div className="last:border-0 border-b-2 md:border-0 border-gray-400 w-1/2 opacity-50"></div>
    </>
  );
}
