import { useState } from "react";
import React from "react"

export const UserStateSample: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <b>{count}</b>
      <button onClick={() => setCount(count + 1)}>-</button>
    </p>
  );

};
