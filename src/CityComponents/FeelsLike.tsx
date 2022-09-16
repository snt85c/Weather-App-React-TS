import feelsLike from "../img/feelsLike.png";
export default function FeelsLike(props: { data?: number }) {
  return (
    <>
      <div className="flex flex-row justify-end">
        <img src={feelsLike} className="w-[5vw] sm:w-[2vw] h-[5vw] sm:h-[2vw] mr-2 " alt="" />
        <div className="flex flex-col w-[15vw]">
          <div className=" font-extrabold text-[3vw] md:text-[1.5vw]">feels like</div>
          <div className="text-[3vw] md:text-[1.5vw]">
            {props.data ? (props.data - 273.15).toFixed(1) : ""}
          </div>
        </div>
      </div>
    </>
  );
}
