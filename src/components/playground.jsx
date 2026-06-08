import { useRef } from "react";

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
        <button onClick={handleFocus}>Focus</button>
      </section>
    </>
  );
}
