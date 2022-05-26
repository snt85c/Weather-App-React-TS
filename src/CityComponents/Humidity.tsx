import humidityIcon from "../img/humidity.png"
export default function Humidity(props:{data?:number}){
    return(<>
    
    <div className="flex flex-row justify-end">
        <img src={humidityIcon} className="w-8 h-8 mr-2 " />
        <div className="flex flex-col w-32">
          <div className="text-[0.7rem] font-extrabold">humidity</div>
          <div>
          {props.data}%
          </div>
        </div>
      </div>
    
    </>)
}