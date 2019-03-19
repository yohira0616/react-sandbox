import React from "react";
import CounterButton from "./TodoList";

type Props = {
  count: number
}

const Counter: React.FC<Props> = props => (
  <>
    <CounterButton/>
    <div>カウント: {props.count} </div>
  </>
)

export default Counter