import React, { Component } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

import TodoViewObject from "./TodoModel";
import "./TodoList.css";
import CounterButton from "./CounterButton";
import store from "./stores/CounterStore";
import {fetch} from "./api/TodoRepository"

interface TodoListState {
  todos: Array<TodoViewObject>
}

export default class TodoList extends Component<{}, TodoListState> {

  constructor(props: {}) {
    super(props);
    this.state = {
      todos: fetch()
    };
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(name: string) {
    const newTodo = {
      id: this.state.todos.length + 1,
      name: name
    };
    this.state.todos.push(newTodo);
    this.setState({
      todos: this.state.todos
    });
  }

  removeTodo(id: number) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Hello React! This is TodoList</h1>
        <TodoForm onSubmit={this.addTodo}/>
        <ul className="todo-ul">
          {this.renderTodo()}
        </ul>
        <CounterButton/>
        <div>カウント: {store.getState()}</div>
      </div>
    );
  }

  private renderTodo() {
    return this.state.todos.map((todo) => {
      return (<Todo id={todo.id} name={todo.name} onFinishButtonClick={this.removeTodo} key={todo.id}/>);
    });
  }
}