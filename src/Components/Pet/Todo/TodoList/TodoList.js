import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todoList, handleCheck, onDelete }) => {
  const todos = todoList.map(({ todoid, text, date, checked }) => (
    <TodoItem
      todoid={todoid}
      key={todoid}
      text={text}
      date={date}
      is_checked={checked}
      handleCheck={handleCheck}
      onDelete={onDelete}
    />
  ));
  return <div>{todos}</div>;
};

export default TodoList;
