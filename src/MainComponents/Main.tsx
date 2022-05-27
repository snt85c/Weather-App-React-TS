import { useEffect, useState } from "react";
import Footer from "./Footer";
import { GetData, GetGeolocation } from "../Services/Services";
import { OpenWeatherMapAPIdata } from "../Services/APIinterface";
import CityData from "../CityComponents/CityData";
import WeeklyForecast from "../WeeklyForecastComponents/WeeklyForecast";
import Searchbar from "./Searchbar";
import Spinner from "../Services/Spinner";
import ToggleComponent from "../CityComponents/ToggleComponent";
import HourlyForecast from "../HourlyForecastComponents/HourlyForecast";

export default function Main() {
  const [data, setWeatherData] = useState<OpenWeatherMapAPIdata>();
  const [search, setSearch] = useState<string | undefined>();
  const [mode, setMode] = useState<"hourly" | "weekly">("weekly");
  const [geolocate, setGeolocate] = useState<boolean>(false);

  useEffect(() => {
    console.log(data);
  }, [data]);

  GetData(search, setWeatherData);
  GetGeolocation(setSearch, geolocate);

  return (
    <>
      <div className="flex flex-col relative min-h-full bg-[url(./img/background.png)] md:bg-center bg-cover text-white select-none fadeInAnimation">
        <Searchbar
          setSearch={setSearch}
          setGeolocate={setGeolocate}
          geolocate={geolocate}
        />
        {!data && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fadeInAnimation">
            <Spinner />
          </div>
        )}
        {data && (
          <>
            <div className="fadeInAnimation">
              <CityData data={data} />
              <div className="flex justify-center items-center -mt-10">
                <ToggleComponent mode={mode} setMode={setMode} />
              </div>
              <div className="pb-5">
                {mode === "weekly" ? (
                  <WeeklyForecast data={data} />
                ) : (
                  <HourlyForecast data={data} />
                )}
              </div>
            </div>
          </>
        )}
        <Footer />
      </div>
    </>
  );
}
