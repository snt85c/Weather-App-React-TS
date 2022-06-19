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
import { useSwipeable } from "react-swipeable";

export default function Main() {
  const [data, setWeatherData] = useState<OpenWeatherMapAPIdata>();
  const [search, setSearch] = useState<string | undefined>();
  const [showHourlyOrWeekly, setShowHourlyOrWeekly] = useState<
    "hourly" | "weekly"
  >("weekly");
  const [geolocate, setGeolocate] = useState<boolean>(false);

  useEffect(() => {
    console.log(data);
  }, [data]);

  GetData(search, setWeatherData);
  GetGeolocation(setSearch, geolocate);

  const swipeHandlers = useSwipeable({
    onSwiped: (eventData) => {
      // console.log("User Swiped!", eventData);
      eventData.dir === "Right"
        ? setShowHourlyOrWeekly("weekly")
        : setShowHourlyOrWeekly("hourly");
    },
  });

  function TestSwipeDiv() {
    const [deltaX, setDeltaX] = useState<number>(0);

    const swipeTest = useSwipeable({
      onSwiping: (e) => {
        setDeltaX(e.deltaX);
        // console.log(deltaX)
      },
      onSwiped:() =>{
        if(deltaX && (deltaX < 200 || deltaX > -200))
        setDeltaX(0) 
      }
    });
    return (
      <>
        <div
          {...swipeTest}
          className="flex justify-center items-center text-center text-white bg-amber-600 border border-amber-500 h-10 mx-3 duration-300"
          style={{ transform: `translateX(${deltaX}px)`, backgroundColor: deltaX && (deltaX >= 200 || deltaX <= -200)?"red":"blue" }}
        >{deltaX}</div>
      </>
    );
  }

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
                <ToggleComponent
                  mode={showHourlyOrWeekly}
                  setMode={setShowHourlyOrWeekly}
                />
              </div>
              <TestSwipeDiv />
              <div {...swipeHandlers} className="pb-5">
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
