import React, { useContext } from "react";
import { CountContext } from "../App";
function ComponentA() {
  const countContext = useContext(CountContext);
  return (
    <div>
      <button
        onClick={() =>
          countContext.countDispatch({ type: "inclement1", value: 1 })
        }
      >
        inclement
      </button>
      <button
        onClick={() =>
          countContext.countDispatch({ type: "decrement1", value: 1 })
        }
      >
        decrement
      </button>
      <button onClick={() => countContext.countDispatch({ type: "reset" })}>
        Reset
      </button>
    </div>
  );
}

export default ComponentA;
