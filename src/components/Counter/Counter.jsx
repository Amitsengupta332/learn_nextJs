"use client";
import React, { useState } from "react";

const CounterPage = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <p>Counter: {counter}</p>
      <button
        className="bg-blue-500 p-2 gap-2 m-2"
        onClick={() => setCounter(counter + 1)}>
        Increment
      </button>
      <button
        className="btn btn-warning"
        onClick={() => setCounter(counter - 1)}>
        {" "}
        Decrement
      </button>
    </div>
  );
};

export default CounterPage;
