import { IWeekly } from "../Services/APIinterface";
import { MONTH, Ordinal } from "../Services/Services";
import WeatherIcon from "../CityComponents/WeatherIcon";
import { useSwipeable } from "react-swipeable";
import { useState } from "react";
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
        className="flex md:flex-col flex-row justify-center items-center gap-2 w-full px-2"
      >
        <div className=" flex flex-col md:text-md xl:text-xl font-extrabold justify-center items-center w-1/2">
          <div>{props.weekday}</div>
          <div className="flex justify-center items-center text-[0.7rem] -mt-2 md:-my-1 font-normal md:w-[100px]">
            {day}
            {Ordinal(day)}
            {" of "}
            {MONTH[month]}
          </div>
        </div>

        <div className="flex justify-center items-center text-md  w-1/4">
          {props.data?.weather[0].main}
        </div>

        <div className="flex justify-center items-center w-10 h-10">
          <WeatherIcon data={props.data?.weather[0].icon} />
        </div>
        <div className="w-1/4">
          <div className="flex justify-center items-center md:text-xl md:font-extrabold">
            {props.data ? (props.data?.temp.day - 273.15).toFixed(1) : ""}°C
          </div>
          <div className="flex justify-center items-center -mt-1 text-[0.5rem] w-full ">
            max
          </div>
        </div>
        <div className="w-1/4">
          <div className="flex justify-center items-center md:text-xl md:font-extrabold">
            {props.data ? (props.data?.temp.min - 273.15).toFixed(1) : ""}°C
          </div>
          <div className="flex justify-center items-center -mt-1 text-[0.5rem] w-full ">
            min
          </div>
        </div>
        <div className="w-1/4">
          <div className="flex justify-center items-center md:text-xl md:font-extrabold">
            {(props.data && props.data?.pop * 100).toFixed(0)}%
          </div>
          <div className="flex justify-center items-center -mt-1 text-[0.5rem] w-full ">
            rain
          </div>
        </div>
      </div>
      <div className="last:border-0 border-b-2 md:border-0 border-gray-400 w-1/2 opacity-50"></div>
    </>
  );
}
