export default function CurrentTemp(props: { data?: number }) {
  let temp: number | undefined = props.data;
  return (
    <>
    <div className=" text-2xl md:text-5xl font-extrabold">
      {temp ? (temp - 273.15).toFixed(1) : ""}°C
    </div>
    </>
  );
}
