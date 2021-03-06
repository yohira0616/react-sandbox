import React from "react";

import store from "./stores/CounterStore";

const CounterButton: React.FC = (props) => {
  const onClick = () => {
    store.dispatch({ type: "INCREMENT" });
  };
  return (
    <button onClick={onClick}>カウントアップ</button>
  );
};

export default CounterButton;