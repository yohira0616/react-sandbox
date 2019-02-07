import React, {Component} from "react";
import Todo from "./Todo"
import TodoForm from "./TodoForm"


export default class TodoList extends Component<{}, { todos: Array<any> }> {

  constructor(props: {}) {
    super(props)
    this.state = {
      todos: this.fetchTodoList()
    }
    this.addTodo = this.addTodo.bind(this)
  }


  fetchTodoList() {
    return [{
      name: "hoge"
    }, {
      name: "fuga"
    }]
  }

  addTodo(name: string) {
    this.state.todos.push({name: name})
    this.setState({
      todos: this.state.todos
    })
  }

  render() {
    return (
      <div>
        <h1>Hello React! This is Todolist</h1>
        <TodoForm onSubmit={this.addTodo}/>
        <ul>
          {this.renderTodo()}
        </ul>
      </div>
    )
  }

  renderTodo() {
    return this.state.todos.map((todo, index) => {
      return (<Todo name={todo.name} key={index}/>)
    })
  }
}