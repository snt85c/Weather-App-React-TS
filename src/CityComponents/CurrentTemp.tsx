export default function CurrentTemp(props: { data?: number }) {
  let temp: number | undefined = props.data;
  return (
    <>
    <div className=" text-2xl md:text-5xl font-extrabold text-[6vw] md:text-[3vw]">
      {temp ? (temp - 273.15).toFixed(1) : ""}°C
    </div>
    </>
  );
}
