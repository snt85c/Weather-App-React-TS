import { useEffect, useState } from "react";
import Footer from "./Footer";
import { GetData } from "../Services/Services";
import { OpenWeatherMapAPIdata } from "../Services/APIinterface";
import CityData from "../CityComponents/CityData";
import WeeklyForecast from "../WeeklyForecastComponents/WeeklyForecast";
import Searchbar from "./Searchbar";
import ToggleComponent from "../CityComponents/ToggleComponent";
import HourlyForecast from "../HourlyForecastComponents/HourlyForecast";

export default function Main() {
  const [data, setWeatherData] = useState<OpenWeatherMapAPIdata>();
  const [search, setSearch] = useState<string | undefined>();
  const [mode, setMode] = useState<"hourly" | "weekly">("weekly");


  GetData(search, setWeatherData);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <div className="flex flex-col relative min-h-full bg-[url(./img/background.png)] md:bg-center bg-cover text-white select-none fadeInAnimation">
        <Searchbar setSearch={setSearch} />
        <CityData data={data} />
        <div className="flex justify-center items-center -mt-10">
        <ToggleComponent mode={mode} setMode={setMode}/>
        </div>
        {mode==="weekly"?<WeeklyForecast data={data}/> : <HourlyForecast data={data}/>}
        <Footer />
      </div>
    </>
  );
}
