import { IonContent, IonPage } from "@ionic/react";
import { useEffect, useState } from "react";

const Timer: React.FC<{ time: any }> = (props: any) => (
  <div className="my-14 text-center w-full drop-shadow-lg">
    <div className="inline-block text-6xl font-semibold text-gray-400 dark:text-gray-300">
      {("0" + Math.floor((props.time / 3600000) % 60)).slice(-2)}:
    </div>
    <div className="inline-block text-6xl font-semibold text-gray-400 dark:text-gray-300">
      {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
    </div>
    <div className="inline-block text-6xl font-semibold text-gray-400 dark:text-gray-300">
      {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}.
    </div>
    <div className="inline-block text-6xl font-semibold text-blue-500">
      {("0" + Math.floor((props.time / 10) % 60)).slice(-2)}
    </div>
  </div>
);

const ControlButtons: React.FC<{
  active: boolean;
  isPaused: boolean;
  handleStart: () => void;
  handlePauseResume: () => void;
  handleReset: () => void;
}> = (props: any) => {
  const StartButton: React.FC = () => (
    <button
      className="px-5 py-2 rounded-xl mx-3 my-2 flex border items-center justify-center text-white bg-blue-500 shadow-lg w-24 min-w-24 font-sans"
      onClick={props.handleStart}>
      Start
    </button>
  );
  const ActiveButtons: React.FC = () => (
    <div className="flex items-center justify-between font-sans">
      <button
        className="px-5 py-2 rounded-xl mx-3 my-2 flex items-center justify-center text-white bg-red-500 shadow-lg w-24 min-w-24"
        onClick={props.handleReset}>
        Reset
      </button>
      <button
        className="px-5 py-2 rounded-xl mx-3 my-2 flex border items-center justify-center text-white bg-blue-500 shadow-lg w-24 min-w-24"
        onClick={props.handlePauseResume}>
        {props.isPaused ? "Resume" : "Pause"}
      </button>
    </div>
  );

  return (
    <div className="mx-12 my-0 w-full box-border flex items-center justify-center font-sans">
      <div>{props.active ? <ActiveButtons /> : <StartButton />}</div>
    </div>
  );
};

const Stopwatch: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval: any = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime(time => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="h-full py-10 flex flex-col items-center justify-between">
          <Timer time={time} />
          <ControlButtons
            active={isActive}
            isPaused={isPaused}
            handleStart={handleStart}
            handlePauseResume={handlePauseResume}
            handleReset={handleReset}
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Stopwatch;
