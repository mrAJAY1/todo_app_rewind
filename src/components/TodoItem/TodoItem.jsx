import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Styles from "./TodoItem.module.scss";

function TodoItem({ todoData, completeTask, count }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    if (isChecked) {
      const timerId = setTimeout(() => completeTask(todoData.id), 1000);
      return () => clearTimeout(timerId);
    }
  }, [isChecked, completeTask, todoData.id]);

  return (
    <div className={`${Styles.container} ${isChecked && Styles.hideSlowly}`}>
      <div className={Styles.text_container}>
        <h3>{count}</h3>
        <div>
          <p
            className={Styles.todo_text}
            style={{ textDecoration: isChecked ? "line-through" : "none" }}
          >
            {todoData.userInput}
          </p>
        </div>
      </div>
      <input
        type="checkbox"
        disabled={isChecked}
        checked={isChecked}
        onChange={handleChange}
      />
    </div>
  );
}

TodoItem.propTypes = {
  todoData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    userInput: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
  }).isRequired,
  completeTask: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};

export default TodoItem;
