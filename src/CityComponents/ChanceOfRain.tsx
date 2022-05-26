import rainIcon from "../img/rain.png"
export default function ChanceOfRain(props:{data?:number}){
    return(<>
     <div className="flex flex-row justify-end">
        <img src={rainIcon} className="w-8 h-8 mr-2 " />
        <div className="flex flex-col w-32">
          <div className="text-[0.7rem] font-extrabold">chance of rain</div>
          <div >
          {props.data}%
          </div>
        </div>
      </div>
    </>)
}