import React, { useState } from "react";

function CounterHook() {
  const [count, setCount] = useState(0);

  const inclementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const inclementCountTen = () => {
    for (let i = 0; i < 10; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={inclementCount}>カウント　+</button>
      <button onClick={inclementCountTen}>カウント　10+</button>
    </div>
  );
}

export default CounterHook;
