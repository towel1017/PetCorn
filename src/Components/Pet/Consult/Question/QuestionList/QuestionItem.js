import React from "react";

const QuestionItem = ({ id, title, date, is_answer, onDelete }) => {
  return (
    <div>
      <div>
        {title} | {date} | {is_answer ? "답변완료" : "답변 대기중"} |{" "}
        <span
          onClick={(e) => {
            e.stopPropagation();
            onDelete(id);
          }}
        >
          ❌
        </span>
      </div>
    </div>
  );
};

export default QuestionItem;
