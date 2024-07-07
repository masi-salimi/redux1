import { useState, useRef } from "react";

export default function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  let nIntervId = 6;
  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());
    nIntervId = setInterval(() => {
      setNow(Date.now());
    }, 1000);
    console.log(nIntervId);
  }
  console.log("render...");

  function handleStop() {
    console.log(nIntervId);
    clearInterval(nIntervId);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
}
