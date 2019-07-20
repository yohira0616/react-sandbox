import React, {Component, FormEvent} from "react";
import Button from '@material-ui/core/Button'

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
    this.onSubmit = this.onSubmit.bind(this)
  }

  handleChange(event: FormEvent<HTMLInputElement>) {
    this.setState({name: event.currentTarget.value})
  }

  onSubmit(event: any) {
    event.preventDefault()
    this.props.onSubmit(this.state.name)
    this.setState({name: ""})
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label htmlFor="todo-form">新しいタスクを追加</label>
        <input type="text" id="todo-form" value={this.state.name} onChange={this.handleChange} required={true}/>
        <Button color="primary" variant="contained">追加</Button>
      </form>
    )
  }
};