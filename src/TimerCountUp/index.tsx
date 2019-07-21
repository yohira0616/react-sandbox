import React, { useEffect, useState } from "react";


const TimerCountUp: React.FC = props => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(interval);
  });
  return <div>{count}</div>;
};

export default TimerCountUp;