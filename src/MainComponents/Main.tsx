import { useEffect, useState } from "react";
import Footer from "./Footer";
import { GetData } from "../Services/Services";
import { OpenWeatherMapAPIdata } from "../Services/APIinterface";
import CityData from "../CityComponents/CityData";
import WeeklyForecast from "../WeeklyForecastComponents/WeeklyForecast";
import Searchbar from "./Searchbar";

export default function Main() {
  const [data, setWeatherData] = useState<OpenWeatherMapAPIdata>();
  const [search, setSearch] = useState<string | undefined>();

  GetData(search, setWeatherData);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <div className="flex flex-col min-h-full bg-[url(./img/background.png)] md:bg-center bg-cover text-white select-none ">
        <Searchbar setSearch={setSearch} />
        <CityData data={data} />
        <WeeklyForecast data={data}/>
        <Footer />
      </div>
    </>
  );
}
