import Axios from "axios";
import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

const QuestionList = () => {
  const [question, setQuestion] = useState([]);
  useEffect(() => {
    const getQuestion = async () => {
      const response = await Axios.get("/consult/");
      console.log(response);
      setQuestion(response.data);
    };
    getQuestion();
  }, [question]);
  const onDelete = async (id) => {
    await Axios.post("/consult/delete", { id }).then((res) => console.log(res));
  };
  const questionList = question.map((item) => (
    <QuestionItem
      key={item.id}
      id={item.id}
      title={item.title}
      date={item.date}
      is_answer={item.is_answer}
      onDelete={onDelete}
    />
  ));

  return (
    <div>
      {console.log(question)}
      <div>{questionList}</div>
    </div>
  );
};

export default QuestionList;
