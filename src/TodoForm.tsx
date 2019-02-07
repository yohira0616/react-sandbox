import React, {Component, FormEvent} from "react";

interface TodoFormState {
  name: string
}

export default class TodoForm extends Component<{}, TodoFormState> {

  constructor(props: {}) {
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
    console.log(`clicked!! ${this.state.name}`)
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