import { useRef, useState } from "react"
import ResultModal from "./ResultModal";

export default function TimeChanllenge({ title, targetTime }) {
  const [timeRemaining, setTimeRemainig] = useState(targetTime * 1000);

  const timer = useRef();
  const dialog = useRef();

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleReset() {
    setTimeRemainig(targetTime * 1000);
  }
 
  function handleStartTimer() {
    timer.current = setInterval(() => {
      setTimeRemainig(prevTimeRemaining => prevTimeRemaining - 10);
    }, 10);
  }

  function handleStopTimer() {
    dialog.current.open();
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timeRemaining} onReset={handleReset} /> 
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 0 ? 's' : ''}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStopTimer : handleStartTimer}>
            {timerIsActive ? 'Stop' : 'Start'}
          </button>
        </p>
        <p className={timerIsActive ? 'active' : undefined}> 
        {timerIsActive ? 'Time is running' : 'Time inactive'}
        </p>
      </section>
    </>
  )
}