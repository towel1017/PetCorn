import Axios from "axios";
import React, { useEffect, useState } from "react";
import Input from "./Input";
import {
  TodoInput,
  TodoListArticle,
  TodoListHeader,
  TodoListWrapper,
} from "./Style";
import TodoList from "./TodoList/TodoList";

const Todos = () => {
  const [todoList, setList] = useState([]);
  const todoCreate = async (input) => {
    const response = await Axios.get(`/todo/add?text=${input}`);
    setList(...todoList);
  };
  const handleChecked = async (todoid) => {
    await Axios.get(`/todo/check?id=${todoid}`).then((res) => console.log(res));
  };
  const handleDelete = async (todoid) => {
    await Axios.get(`/todo/delete?id=${todoid}`).then((res) => setList());
  };
  useEffect(() => {
    const loadTodos = async () => {
      await Axios.get("/todo/info").then((res) => {
        setList(res.data);
      });
    };
    loadTodos();
  });
  return (
    <TodoListWrapper>
      <TodoListHeader>
        <span>⏰ 일정관리</span>
      </TodoListHeader>
      <TodoListArticle>
        <TodoList
          todoList={todoList}
          handleCheck={handleChecked}
          onDelete={handleDelete}
        />
      </TodoListArticle>
      <TodoInput>
        <Input todoCreate={todoCreate} />
      </TodoInput>
    </TodoListWrapper>
  );
};

export default Todos;
