import { useState } from "react";
export default function Clock(props: { data?: string }) {
  const [time, setTime] = useState("");

  function getTime() {
    let timer: Date = new Date();
    setTime(
      timer.toLocaleTimeString("en-GB", {
        timeZone: props.data,
      })
    );
  }
  setTimeout(getTime, 1000);
  return <div className="text-[3vw] md:text-[1.5vw]">{time}</div>;
}
