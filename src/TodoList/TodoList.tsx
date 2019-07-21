import React, { useCallback, useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

import TodoViewObject from "./TodoModel";
import "./TodoList.css";
import CounterButton from "../CounterButton";
import store from "../stores/CounterStore";
import { fetch } from "../api/TodoRepository";
import HookCounter from "../HookCounter";

const TodoList: React.FC = props => {
  const [todos, setTodos] = useState<TodoViewObject[]>(fetch());

  const removeTodo = useCallback((id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }, [todos]);

  const addTodo = useCallback((name: string) => {
    const newTodo = {
      id: todos.length + 1,
      name: name
    };
    todos.push(newTodo);
    setTodos(Array.from(todos));
  }, [todos]);

  const renderTodo: JSX.Element[] = todos.map(todo => {
    return <Todo id={todo.id} name={todo.name} onFinishButtonClick={removeTodo} key={todo.id}/>;
  });

  return (
    <div className="container">
      <h1>Hello React! This is TodoList</h1>
      <TodoForm onSubmit={addTodo}/>
      <ul className="todo-ul">
        {renderTodo}
      </ul>
      <CounterButton/>
      <div>カウント: {store.getState()}</div>
    </div>
  );
};

export default TodoList;