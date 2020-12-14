import React, { useState } from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  width: 100%;
  height: 100%;
  input {
    flex: 1;
    border: 4px solid #ff9191;
    border-radius: 10px;
    width: 99%;
    height: 75%;
    margin: 7px 3px 0px 7px;
    font-size: 22px;
    background-color: #4169e1;
    font-family: "AppleSDGothicNeoSB00";
    color: white;
  }
  input::placeholder {
    color: white;
  }
`;

const Input = ({ todoCreate }) => {
  const [input, onChange] = useState("");
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      // 엔터키가 눌렸을 때 실행할 내용
      var blank_pattern = /^\s+|\s+$/g;
      if (input === "" || input.replace(blank_pattern, "") === "") {
        alert("내용을 입력해주세요");
      } else {
        console.log("asdasd");
        todoCreate(input);
      }
      onChange("");
    }
  };
  return (
    <InputWrapper>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        placeholder="할 일을 입력하세요"
        onKeyPress={onKeyPress}
      />
    </InputWrapper>
  );
};

export default Input;
