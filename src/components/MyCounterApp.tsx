import React, { useState } from "react";
import MyButton from "./MyButton";

const MyCounterApp = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => setCount(prev => prev + 1);
  const handleDecrement = () => setCount(prev => prev - 1);

  return (
    <div className="flex flex-col items-center">
      <div className="container mb-3">
        <h1 className="text-4xl text-slate-100 shadow-sm">{count}</h1>
      </div>
      <div className="container flex flex-row justify-center gap-3 px-3">
        <MyButton
          handleButton={handleDecrement}
          className="bg-orange-300 w-full hover:bg-orange-500"
        >
          -
        </MyButton>
        <MyButton
          handleButton={handleIncrement}
          className="bg-green-300 w-full hover:bg-green-500 text-lg font-bold text-slate-800 hover:text-slate-100 py-5"
        >
          +
        </MyButton>
      </div>
    </div>
  );
};

export default MyCounterApp;
