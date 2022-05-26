import feelsLike from "../img/feelsLike.png";
export default function FeelsLike(props: { data?: number }) {
  return (
    <>
      <div className="flex flex-row justify-end">
        <img src={feelsLike} className="w-8 h-8 mr-2 " alt="" />
        <div className="flex flex-col w-32">
          <div className="text-[0.7rem] font-extrabold">feels like</div>
          <div>
            {props.data ? (props.data - 273.15).toFixed(1) : ""}
          </div>
        </div>
      </div>
    </>
  );
}
