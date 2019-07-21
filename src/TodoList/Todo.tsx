import React from "react";

interface TodoProps {
  id: number
  name: string
  onFinishButtonClick: (key: number) => void
}

const Todo: React.FC<TodoProps> = (props) => {

  const onSubmitClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    props.onFinishButtonClick(props.id);
  };

  return (
    <li>
      {props.name}
      <button onClick={onSubmitClick}>完了</button>
    </li>
  );
};

export default Todo;