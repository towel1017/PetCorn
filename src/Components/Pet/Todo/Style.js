import styled from "styled-components";

const TodoListWrapper = styled.div`
  margin: 0;
  overflow: hidden;
  dispaly: flex;
  flex-direction: column;
  background-color: white;
`;
const TodoListHeader = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-self: center;
  span {
    font-family: "AppleSDGothicNeoSB00";
    align-self: center;
    font-size: 25px;
  }
`;

const TodoListArticle = styled.div`
  width: 100%;
  height: 810px;
  background-color: #ff9191;
  display: flex;
  flex-direction: column;
div::first-child {
  flex:1;
}
  }
`;
const TodoInput = styled.div`
  width: 100%;
  height: 98px;
  padding-top: 1px;
  background-color: #4169e1;
`;
export { TodoListWrapper, TodoListHeader, TodoListArticle, TodoInput };
