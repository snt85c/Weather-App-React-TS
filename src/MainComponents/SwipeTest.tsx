import { useState } from "react";
import { useSwipeable } from "react-swipeable";

export default function TestSwipeDiv() {
    const [deltaX, setDeltaX] = useState<number>(0);

    const swipeTest = useSwipeable({
      onSwiping: (e) => {
        setDeltaX(e.deltaX);
        // console.log(deltaX)
      },
      onSwiped: () => {
        if (deltaX && (deltaX < 200 || deltaX > -200)) setDeltaX(0);
      },
    });
    return (
      <>
        <div
          {...swipeTest}
          className="flex flex-col justify-center items-center text-center text-white bg-amber-600 border border-amber-500 h-10 mx-3 duration-300"
          style={{
            transform: `translateX(${deltaX}px)`,
            backgroundColor:
              deltaX && (deltaX >= 200 || deltaX <= -200) ? "red" : "",
          }}
        >
          <div>{deltaX.toFixed(0)}</div>
          <div className="text-[0.8rem] -mt-2">deltaX</div>
        </div>
      </>
    );
  }