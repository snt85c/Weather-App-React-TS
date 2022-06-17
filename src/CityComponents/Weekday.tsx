import { useEffect, useState } from "react";

export default function Weekday() {
  const [weekday, setWeekday] = useState<number>(0);
  const [calendarDay, setCalendarDay] = useState<number>(0);
  const [month, setMonth] = useState<number>(0);
  const DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const MONTH = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let timer: Date = new Date();
  useEffect(() => {
    setWeekday(timer.getDay());
    setCalendarDay(timer.getDate());
    setMonth(timer.getMonth());
  }, []);

  function Ordinal() {
    switch (calendarDay){
      case 1:
        return <span className="text-[0.5rem]">st</span>
      case 2:
        return <span className="text-[0.5rem]">nd</span>
      case 3:
        return <span className="text-[0.5rem]">rd</span>
      default:
        return <span className="text-[0.5rem]">th</span>
    }
  }

  return (
    <>
      <div className="font-extrabold -my-1">
        {DAYS[weekday]}: {calendarDay}<Ordinal/> of {MONTH[month]}
      </div>
    </>
  );
}
