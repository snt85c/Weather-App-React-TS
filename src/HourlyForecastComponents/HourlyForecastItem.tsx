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
      <div className="flex md:flex-col flex-row justify-center items-center gap-2">
        <div className="flex justify-center items-center font-extrabold md:text-md xl:text-xl md:-mb-4 w-20 md:w-[6rem]">
          <div className="-mt-1 text-[0.5rem] pr-1">+{props.offset}</div>
          {time}
        </div>
        <div>{props.data.weather[0].main}</div>
        <div className="w-10 h-10 md:-mt-2">
          <WeatherIcon data={props.data?.weather[0].icon} />
        </div>
        <div>
          <div>
            {props.data.temp ? (props.data.temp - 273.15).toFixed(1) : ""}°C
          </div>
          <div className="flex justify-center items-center -mt-1 text-[0.5rem]">temp</div>
        </div>
        <div>
          <div className="flex justify-center items-center">{(props.data.pop * 100).toFixed(0)}%</div>
          <div className=" -mt-1 text-[0.5rem]"> chance of rain</div>
        </div>
      </div>
      <div className="last:border-0 border-b-2 md:border-0 border-gray-400 w-1/5 opacity-50"></div>
    </>
  );
}
