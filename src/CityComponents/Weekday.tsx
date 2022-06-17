import { useEffect, useState } from "react";

export default function Weekday() {
  const [weekday, setWeekday] = useState(0);
  const DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let timer: Date = new Date();
  useEffect(() => {
    setWeekday(timer.getDay());
  }, []);

  return (
    <>
      <div className="font-extrabold -my-1">{DAYS[weekday]}</div>
    </>
  );
}
