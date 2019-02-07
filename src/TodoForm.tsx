import React, {Component, FormEvent} from "react";

interface TodoFormState {
  name: string
}

interface TodoFormProps {
  onSubmit: (new_todo: string) => void
}

export default class TodoForm extends Component<TodoFormProps, TodoFormState> {

  constructor(props: TodoFormProps) {
    super(props);
    this.state = {name: ""}
    this.handleChange = this.handleChange.bind(this)
    this.onSubmitClick = this.onSubmitClick.bind(this)
  }

  handleChange(event: FormEvent<HTMLInputElement>) {
    this.setState({name: event.currentTarget.value})
  }

  onSubmitClick(event: FormEvent<HTMLButtonElement>) {
    event.preventDefault()
    this.props.onSubmit(this.state.name)
    this.setState({name: ""})
  }

  render() {
    return (
      <form>
        <label htmlFor="todo-form">新しいタスクを追加</label>
        <input type="text" id="todo-form" value={this.state.name} onChange={this.handleChange}/>
        <button onClick={this.onSubmitClick}>追加</button>
      </form>
    )
  }
};