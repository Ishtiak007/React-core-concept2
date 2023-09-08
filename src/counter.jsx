import { useState } from "react";

export default function Counter() {
  const style = {
    border: "3px solid coral",
    padding: "5px",
    borderRadius: "15px",
    marginTop: "10px",
  };
  const [count, countFunction] = useState(0);
  const increase = () => {
    const newCount = count + 1;
    countFunction(newCount);
  };
  const decrease = () => {
    const newCount = count - 1;
    countFunction(newCount);
  };
  return (
    <div style={style}>
      <h3>Counter: {count}</h3>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}
