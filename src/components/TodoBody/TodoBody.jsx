import React from "react";
import Style from "./TodoBody.module.scss";
import TodoItem from "../TodoItem/TodoItem";

function TodoBody() {
  return (
    <div className={`mt-30 ${Style.todoBodyContainer} container`}>
      <h2>Tasks</h2>
      <TodoItem />
    </div>
  );
}

export default TodoBody;
