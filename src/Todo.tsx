import React, {Component, FormEvent} from "react";

interface TodoProps {
  id: number
  name: string
  onFinishButtonClick: (key: number) => void
}

export default class Todo extends Component<TodoProps, {}> {

  constructor(props: TodoProps) {
    super(props)
    this.onSubmitClick = this.onSubmitClick.bind(this)
  }

  onSubmitClick(event: any) {
    event.preventDefault()
    this.props.onFinishButtonClick(this.props.id)
  }

  render() {
    return (
      <li>{this.props.name}
        <button onClick={this.onSubmitClick}>完了</button>
      </li>
    )
  }
}