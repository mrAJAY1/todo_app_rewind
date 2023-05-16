import React, { useState } from "react";
import PropTypes from "prop-types";
import Style from "./TodoBody.module.scss";
import TodoItem from "../TodoItem/TodoItem";

function TodoBody({ todoList, removeTask }) {
  const [shouldShake, setShouldShake] = useState(false);
  return (
    <div
      className={`mt-30 ${Style.todoBodyContainer} ${
        shouldShake && Style.animate_deletion
      } container`}
    >
      <h2>Tasks</h2>
      {todoList.map((item, index) => (
        <TodoItem
          key={item.id}
          todoData={item}
          count={index + 1}
          setShouldShake={setShouldShake}
          completeTask={removeTask}
        />
      ))}
    </div>
  );
}

TodoBody.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      userInput: PropTypes.string.isRequired,
      isCompleted: PropTypes.bool.isRequired,
    })
  ).isRequired,
  removeTask: PropTypes.func.isRequired,
};

export default TodoBody;
