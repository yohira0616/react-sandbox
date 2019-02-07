import React, {Component} from "react";
import Todo from "./Todo"

export default class TodoList extends Component<{}, {}> {

  constructor(props: {}) {
    super(props)
    this.state = {}
  }

  fetchTodoList() {
    return [{
      name: "hoge"
    }, {
        name: "fuga"
      }]

  }

  render() {
    return (
      <div>
        <h1>Hello React! This is Todolist</h1>
        <ul>
          {this.renderTodo()}
        </ul>
      </div>
    )
  }

  renderTodo() {
    return this.fetchTodoList().map((todo,index)=>{
      return (<Todo name={todo.name} key={index}/>)
    })
  }
}