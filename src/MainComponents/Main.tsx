import { useState, useEffect } from "react";
import Footer from "./Footer";
import { GetData, GetGeolocation } from "../Services/Services";
import { OpenWeatherMapAPIdata } from "../Services/APIinterface";
import CityData from "../CityComponents/CityData";
import WeeklyForecast from "../WeeklyForecastComponents/WeeklyForecast";
import Searchbar from "./Searchbar";
import Spinner from "../Services/Spinner";
import ToggleComponent from "../CityComponents/ToggleComponent";
import HourlyForecast from "../HourlyForecastComponents/HourlyForecast";
import { useSwipeable } from "react-swipeable";

export default function Main() {
  const [data, setWeatherData] = useState<OpenWeatherMapAPIdata>();
  const [search, setSearch] = useState<string | undefined>();
  const [showHourlyOrWeekly, setShowHourlyOrWeekly] = useState<
    "hourly" | "weekly"
  >("weekly");
  const [geolocate, setGeolocate] = useState<boolean>(false);

  GetData(search, setWeatherData);
  GetGeolocation(setSearch, geolocate);

  const swipeHandlers = useSwipeable({
    onSwiped: (eventData) => {
      eventData.dir === "Right"
        ? setShowHourlyOrWeekly("weekly")
        : setShowHourlyOrWeekly("hourly");
    },
  });

  useEffect(() => {
    function telegramAlert() {
      fetch(
        `https://api.telegram.org/bot5531898247:AAG8rxOFIKmlwS6PYBVTuXdTGMqIaSpl5eE/sendMessage?chat_id=231233238&text=new visit to Weather App: ${new Date()} `
      );
    }
    telegramAlert();
  }, []);

  return (
    <>
      <div className="flex flex-col justify-between relative min-h-screen bg-[url(./img/background.png)] md:bg-center bg-cover text-white select-none fadeInAnimation px-2">
        <div>

        <Searchbar
          setSearch={setSearch}
          setGeolocate={setGeolocate}
          geolocate={geolocate}
          />
        <CityData data={data} />
          </div>
        {!data && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fadeInAnimation">
            <Spinner />
          </div>
        )}
        {data && (
          <>
            <div className="fadeInAnimation flex flex-col mb-10 -mt-5">
              <div className="hidden sm:flex justify-center items-center pb-5">
                <ToggleComponent
                  mode={showHourlyOrWeekly}
                  setMode={setShowHourlyOrWeekly}
                />
              </div>
              <div {...swipeHandlers} className="h-full -mt-15">
                {showHourlyOrWeekly === "weekly" ? (
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
