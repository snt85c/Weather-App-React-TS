import { Dispatch} from "react";

export default function ToggleComponent(props:{mode:"weekly"|"hourly", setMode:Dispatch<React.SetStateAction<"weekly" | "hourly">>}) {
  return (
    <>
      <div className="flex flex-col md:pb-5">
        <label
          htmlFor="default-toggle"
          className="hidden sm:inline-flex relative items-center cursor-pointer   "
        >
          <input
            onClick={() => props.setMode(props.mode === "weekly" ? "hourly" : "weekly")}
            type="checkbox"
            value=""
            id="default-toggle"
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-700 "></div>
        </label>
        <span className="flex justify-center items-center text-[0.6rem] font-medium text-white">
          {props.mode}
        </span>
      </div>
    </>
  );
}
