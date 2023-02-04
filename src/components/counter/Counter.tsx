import React, { useState } from "react";
import { Button } from "../UI/button/button";
import cl from "./Counter.module.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increase = () => setCounter((prev) => prev + 1);
  const decrease = () => setCounter((prev) => prev - 1);

  return (
    <div>
      <h1 className={cl.title}>{counter}</h1>
      <Button onClick={decrease}>-</Button>
      <Button onClick={increase}>+</Button>
    </div>
  );
};

export default Counter;
