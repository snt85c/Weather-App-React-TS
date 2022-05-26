import windSpeedIcon from "../img/windSpeed.png";
export default function WindSpeed(props: { data?: number }) {
  return (
    <>
      {" "}
      <div className="flex flex-row justify-end">
        <img src={windSpeedIcon} className="w-8 h-8 mr-2 " />
        <div className="flex flex-col w-32">
          <div className="text-[0.7rem] font-extrabold">wind speed</div>
          <div>{props.data}km/h</div>
        </div>
      </div>
    </>
  );
}
