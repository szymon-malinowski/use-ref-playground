import { useRef } from "react";
import Stopwatch from "./stopwatch";

export default function Playground() {
  const inputRef = useRef(null);

  function handleFocus() {
    // Only focus, if inputRef is not null
    inputRef.current?.focus();
    console.log(inputRef.current);
  }

  return (
    <>
      <h1>useRef Playground</h1>
      <section>
        <h2>1. Focus on input field</h2>
        <input type="text" ref={inputRef} />
        <button onClick={handleFocus}>Set Focus</button>
      </section>
      <section>
        <h2>2. Storing values without re-rendering</h2>
        <Stopwatch />
      </section>
      <section>
        <h2>Comparison of `useRef` and useState</h2>
        <h3>useRef</h3>
        <ul>
          <li>Used for DOM manipulations.</li>
          <li>Does not re-render the component.</li>
          <li>Stores values between renders.</li>
        </ul>
        <h3>useState</h3>
        <ul>
          <li>Useful for changing the state of a component.</li>
          <li>Always re-renders the component.</li>
          <li>Does not store any values between re-renders.</li>
        </ul>
      </section>
    </>
  );
}
