import React from "react";
import styled from "styled-components";

const TodoItemWrapper = styled.div`
  margin: 0px 5px 10px 20px;
  width: 96%;
  height: 70px;
  background-color: white;
  border: 2px solid blue;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  background-color: #4169e1;
  div {
    color: white;
    font-family: "AppleSDGothicNeoSB00";
    margin: 5px;
  }
`;
const TodoItemText = styled.div`
  flex: 1;
  font-size: 20px;
`;

const TodoItem = ({
  todoid,
  text,
  date,
  is_checked,
  handleCheck,
  onDelete,
}) => {
  return (
    <TodoItemWrapper>
      <div
        onClick={(e) => {
          e.stopPropagation();
          onDelete(todoid);
        }}
      >
        <span>❌</span>
      </div>
      <TodoItemText>{text}</TodoItemText>
      <div>{date}</div>
      <div
        onClick={(e) => {
          e.stopPropagation();
          handleCheck(todoid);
        }}
      >
        <span>{is_checked ? "✅" : "⬛"}</span>
      </div>
    </TodoItemWrapper>
  );
};

export default TodoItem;
