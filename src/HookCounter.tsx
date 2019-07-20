import { useCallback, useState } from "react";
import * as React from "react";

const HookCounter: React.FC = () => {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>+1</button>
    </div>
  );
};

export default HookCounter;