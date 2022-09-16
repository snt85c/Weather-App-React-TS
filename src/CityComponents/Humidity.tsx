import humidityIcon from "../img/humidity.png"
export default function Humidity(props:{data?:number}){
    return(<>
    
    <div className="flex flex-row justify-end">
        <img src={humidityIcon} className="w-[5vw] sm:w-[2vw] h-[5vw] sm:h-[2vw] mr-2 " />
        <div className="flex flex-col w-[15vw]">
          <div className="text-[3vw] md:text-[1.5vw] font-extrabold">humidity</div>
          <div className="text-[3vw] md:text-[1.5vw]">
          {props.data}%
          </div>
        </div>
      </div>
    
    </>)
}