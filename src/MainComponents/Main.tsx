import { useEffect, useState } from "react";
import Footer from "./Footer";
import { GetData } from "../Services/Services";
import { OpenWeatherMapAPIdata } from "../Services/APIinterface";
import CityData from "../CityComponents/CityData";

export default function Main() {
  const [data, setWeatherData] = useState<OpenWeatherMapAPIdata>();

  GetData("santiago de compostela", setWeatherData);

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
