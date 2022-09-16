import rainIcon from "../img/rain.png"
export default function ChanceOfRain(props:{data?:number}){

  let pop = props.data? ((props.data * 100).toFixed(0)): 0
    return(<>
     <div className="flex flex-row justify-end">
        <img src={rainIcon} className="w-[5vw] sm:w-[2vw] h-[5vw] sm:h-[2vw] mr-2 " />
        <div className="flex flex-col w-[15vw]">
          <div className="text-[3vw] md:text-[1.5vw] font-extrabold">chance of rain</div>
          <div className="text-[3vw] md:text-[1.5vw]">
          {pop}%
          </div>
        </div>
      </div>
    </>)
}