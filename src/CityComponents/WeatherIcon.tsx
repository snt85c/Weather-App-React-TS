import { useState } from "react";
export default function WeatherIcon(props:{data?:string}) {
  const [isLoaded, SetIsLoaded] = useState(false);
  return (
    <>
    <div className="w-20 h-20 md:w-32 md:h-32">

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
