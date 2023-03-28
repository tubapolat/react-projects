import { CountdownCircleTimer } from "react-countdown-circle-timer";

import { useSelector } from "react-redux";
import { ResultModal } from "../ResultModal";

export const CircleTimer = () => {
  const { time, start, timerKey } = useSelector((state) => state.typingSpeed);

  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <ResultModal />;
    } else {
      return (
        <div className="flex flex-col items-center justify-center">
          <span>{remainingTime}</span>
        </div>
      );
    }
  };

  return (
    <div className="m-2">
      <CountdownCircleTimer
        key={timerKey}
        isPlaying={start === true ? true : false}
        duration={time}
        colors={["#fb1302", "#05aef9", "#fe0404", "#fe0404"]}
        colorsTime={[7, 5, 2, 0]}
        size={100}
        strokeWidth={8}
        trailStrokeWidth={8}
      >
        {renderTime}
      </CountdownCircleTimer>
    </div>
  );
};
