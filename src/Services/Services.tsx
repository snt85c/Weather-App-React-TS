import { Dispatch, SetStateAction, useEffect } from "react";

const openweathermapAPIKEY: string = "f01e320c417dd9583e7ed5e57fb13e71";

export async function GetData(
  inputValue: string,
  setWeatherData: Dispatch<SetStateAction<any>>
) {
  useEffect(() => {
    async function FetchData() {
      try {
        const response1 = await fetch(
          `https://api.openweathermap.org/geo/1.0/direct?q=${inputValue}&limit=5&appid=${openweathermapAPIKEY}`,
          { mode: "cors" }
        );
        const geoData = await response1.json();
        const lat: number = geoData[0].lat;
        const lon: number = geoData[0].lon;

        const response2 = await fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=standard&exclude=minutely&appid=${openweathermapAPIKEY}`,
          { mode: "cors" }
        );
        const weatherData = await response2.json();
        setWeatherData({ geo: geoData, weather:  weatherData });
      } catch (error) {
        console.log(error, "ERROR: failed fetching geolocation/onecall API");
      }
    }
    FetchData();
  }, [inputValue]);
}