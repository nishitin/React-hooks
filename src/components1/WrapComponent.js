import React, { useState } from "react";
import { useCallback } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

const WrapComponent = () => {
  const [age, setAge] = useState(30);
  const [score, setScore] = useState(100);

  const inclementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const inclementScore = useCallback(() => {
    setScore(score + 100);
  }, [score]);

  return (
    <div className="App">
      <Title />
      <Count text="年齢" count={age} />
      <Count text="信用スコア" count={score} />
      <Button handleClick={inclementAge}>年齢 +</Button>
      <Button handleClick={inclementScore}>信用スコア +</Button>
    </div>
  );
};

export default WrapComponent;
