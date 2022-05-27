import { Dispatch, SetStateAction, useEffect } from "react";

const openweathermapAPIKEY: string = "f01e320c417dd9583e7ed5e57fb13e71";

export async function GetGeolocation(setSearch:Dispatch<SetStateAction<any>>){
  useEffect(() => {
    async function geolocation() {
      try {
        const promise:any = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        let lat: string = promise.coords.latitude;
        let lon: string = promise.coords.longitude;
        const data = await fetch(
          `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=f01e320c417dd9583e7ed5e57fb13e71`,
          { mode: "cors" }
        );
        const geoData = await data.json();
        setSearch(geoData[0].name);
      } catch (error) {
        console.log(error, "ERROR: failed fetching geolocation API");
      }
    }
    geolocation();
  }, []);
}

export async function GetData(
  inputValue: string | undefined,
  setWeatherData: Dispatch<SetStateAction<any>>
) {
  useEffect(() => {
    async function FetchData() {
      try {
        const response1 = await fetch(
          `https://api.openweathermap.org/geo/1.0/direct?q=${inputValue?inputValue:"santiago de compostela"}&limit=5&appid=${openweathermapAPIKEY}`,
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
