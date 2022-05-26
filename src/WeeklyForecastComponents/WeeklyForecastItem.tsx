import { IWeekly } from "../Services/APIinterface";

export default function WeeklyForecastItem(props: {
  data?: IWeekly;
  day: number;
}) {
  return <><div>{props.data?.weather[0].main}</div></>;
}
