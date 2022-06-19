import { useEffect, useState } from "react";
import { DAYS, MONTH, Ordinal } from "../Services/Services";

export default function Weekday() {
  const [weekday, setWeekday] = useState<number>(0);
  const [calendarDay, setCalendarDay] = useState<number>(0);
  const [month, setMonth] = useState<number>(0);

  let timer: Date = new Date();
  useEffect(() => {
    setWeekday(timer.getDay());
    setCalendarDay(timer.getDate());
    setMonth(timer.getMonth());
  }, []);

  return (
    <>
      <div className="font-extrabold -my-1">
        {DAYS[weekday]}: {calendarDay}{Ordinal(calendarDay)} of {MONTH[month]}
      </div>
    </>
  );
}
