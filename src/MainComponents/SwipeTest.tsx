import { useState } from "react";
import { useSwipeable } from "react-swipeable";

export function TestSwipeDiv() {
  const [deltaX, setDeltaX] = useState<number>(0);

  const swipeTest = useSwipeable({
    onSwiping: (e) => {
      setDeltaX(e.deltaX);
      // console.log(deltaX)
    },
    onSwiped: () => {
      if (deltaX && (deltaX < 150 || deltaX > -150)) setDeltaX(0);
    },
  });
  return (
    <>
      <div
        {...swipeTest}
        className="flex flex-col m-1 justify-center items-center text-center text-white bg-amber-600 border border-amber-500 h-10 mx-3 duration-300"
        style={{
          transform: `translateX(${deltaX}px)`,
          backgroundColor:
            deltaX && (deltaX >= 150 || deltaX <= -150) ? "red" : "",
        }}
      >
        <div>{deltaX.toFixed(0)}</div>
        <div className="text-[0.8rem] -mt-2">swipe test 1</div>
      </div>
    </>
  );
}

export function TestSwipeDiv2() {
  const [deltaX, setDeltaX] = useState<number>(0);
  const [opacityLx, setOpacityLx] = useState<number>(0);
  const [opacityRx, setOpacityRx] = useState<number>(0);
  const [color, setColor] = useState<string>("");

  const swipeTest = useSwipeable({
    onSwiping: (e) => {
      setDeltaX(e.deltaX);
      if (e.dir === "Right") {
        setOpacityLx(deltaX / 100);
        setColor("red");
      } else {
        setOpacityRx(Math.abs(deltaX / 100));
        setColor("purple");
      }
    },
    onSwiped: () => {
      if (deltaX && (deltaX < 150 || deltaX > -150)) {
        setDeltaX(0);
        setOpacityLx(0);
        setOpacityRx(0);

      }
    },
  });

  return (
    <>
      <div {...swipeTest} className="flex">
        <div
          className="flex m-1 px-2 justify-between items-center text-center text-white bg-amber-600 border border-amber-500 h-10 mx-3 duration-300 w-full"
          style={{
            transform: `translateX(${deltaX}px)`,
            backgroundColor:
              deltaX && (deltaX >= 150 || deltaX <= -150) ? color : "",
          }}
        >
          <div style={{ opacity: opacityLx }}>delete</div>
          <div className="flex flex-col justify-center items-center">
            {Math.abs(deltaX / 100).toFixed(0)}
            <div className="text-[0.8rem] -mt-2">swipe test 2</div>
          </div>
          <div style={{ opacity: opacityRx }}>highlight</div>
        </div>
      </div>
    </>
  );
}
