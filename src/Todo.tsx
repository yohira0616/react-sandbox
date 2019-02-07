import React, {Component} from "react";

interface TodoProps {
  name: string
}

export default class Todo extends Component<TodoProps, {}> {

  constructor(props: TodoProps) {
    super(props)
  }

  render() {
    return (
      <li>{this.props.name}</li>
    )
  }
}