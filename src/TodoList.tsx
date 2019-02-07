import React, {Component} from "react";
import Todo from "./Todo"
import TodoForm from "./TodoForm"

import TodoViewObject from "./TodoViewObject"


export default class TodoList extends Component<{}, { todos: Array<TodoViewObject> }> {

  constructor(props: {}) {
    super(props)
    this.state = {
      todos: this.fetchTodoList()
    }
    this.addTodo = this.addTodo.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
  }


  private fetchTodoList(): Array<TodoViewObject> {
    return [new TodoViewObject(1, "hoge"), new TodoViewObject(2, "fuga")]
  }

  addTodo(name: string) {
    this.state.todos.push(new TodoViewObject(this.state.todos.length + 1, name))
    this.setState({
      todos: this.state.todos
    })
  }

  removeTodo(id: number) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  render() {
    return (
      <div>
        <h1>Hello React! This is TodoList</h1>
        <TodoForm onSubmit={this.addTodo}/>
        <ul>
          {this.renderTodo()}
        </ul>
      </div>
    )
  }

  private renderTodo() {
    return this.state.todos.map((todo) => {
      return (<Todo id={todo.id} name={todo.name} onFinishButtonClick={this.removeTodo} key={todo.id}/>)
    })
  }
}