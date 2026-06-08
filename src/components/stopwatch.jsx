import { useState, useRef } from "react";

export default function Stopwatch() {
  const intervalRef = useRef(null);
  const [seconds, setSeconds] = useState(0);

  function start() {
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    console.log(intervalRef.current);
  }

  function stop() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    console.log(intervalRef.current);
  }

  return (
    <>
      <p>{seconds} seconds</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </>
  );
}
