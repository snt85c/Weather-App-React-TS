import windSpeedIcon from "../img/windSpeed.png";
export default function WindSpeed(props: { data?: number }) {
  return (
    <>
      {" "}
      <div className="flex flex-row justify-end">
        <img src={windSpeedIcon} className="w-[5vw] sm:w-[2vw] h-[5vw] sm:h-[2vw] mr-2 " />
        <div className="flex flex-col w-[15vw]">
          <div className="text-[3vw] md:text-[1.5vw] font-extrabold">wind speed</div>
          <div className="text-[3vw] md:text-[1.5vw]">{props.data}km/h</div>
        </div>
      </div>
    </>
  );
}
