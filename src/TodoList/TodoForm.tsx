import React, { Component, FormEvent, useCallback, useState } from "react";
import Button from "@material-ui/core/Button";

interface TodoFormProps {
  onSubmit: (new_todo: string) => void
}

const TodoForm: React.FC<TodoFormProps> = props => {

  const [name, setName] = useState("");
  const handleChange = useCallback((e: FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  }, [name]);
  const onSubmit = useCallback((event: FormEvent)=>{
    event.preventDefault()
    console.log(name)
    setName("")
  },[name])

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="todo-form">新しいタスクを追加</label>
      <input type="text" id="todo-form" value={name} onChange={handleChange} required={true}/>
      <Button type="submit" color="primary" variant="contained">追加</Button>
    </form>
  );
};

export default TodoForm;