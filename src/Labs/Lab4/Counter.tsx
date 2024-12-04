import React, { useState } from "react";
import "./counter.css"
export default function Counter() {
  const [count, setCount] = useState(7);

  console.log(count);
  return (
    <div id="wd-counter-use-state" className="counter">
      <h2>Counter: {count}</h2>
      <button
        onClick={() => setCount(count + 1) }
        id="wd-counter-up-click"
        className="button up">
        Up
      </button>
      <button
        onClick={() => setCount(count - 1)}
        id="wd-counter-down-click"
        className="button down">
        Down
      </button>
<hr/></div>);}