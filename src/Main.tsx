import { useEffect, useState } from "react";
import Footer from "./Footer";
import { GetData } from "./Services";
import { OpenWeatherMapAPIdata } from "./APIinterface";
import CityData from "./CityData";

export default function Main() {
  const [data, setWeatherData] = useState<OpenWeatherMapAPIdata>();

  GetData("london", setWeatherData);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <div className="flex flex-col justify-between min-h-full bg-[url(./img/background.png)] bg-cover text-white ">
        <CityData data={data}/>
        <Footer />
      </div>
    </>
  );
}
