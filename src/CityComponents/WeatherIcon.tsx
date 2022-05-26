import { useState } from "react";
export default function WeatherIcon(props:{data?:string,}) {
  const [isLoaded, SetIsLoaded] = useState(false);
  return (
    <>
    <div >

      <img
        src={`https://openweathermap.org/img/wn/${props.data}@4x.png`}
        onLoad={() => {
          SetIsLoaded(true);
        }}
        style={{ display: isLoaded ? "flex" : "none" }}
        />
        </div>
    </>
  );
}
