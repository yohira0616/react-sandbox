import React from "react";
import CounterButton from "./TodoList/TodoList";
import { connect } from "react-redux";
import { increment, decrement, reset } from "./actioncreators/actionCreators";

type Props = {
  count: number
}

type State = {
  count: number
}

const Counter: React.FC<Props> = props => (
  <>
    <CounterButton/>
    <div>カウント: {props.count} </div>
  </>
);

const mapStateToProps = (state: State, props: Props) => {
  const { count } = state;

  return {
    count: count
  };
};

const mapDispatchToProps = { increment, decrement, reset };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);