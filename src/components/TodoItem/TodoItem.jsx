import React, { useState } from "react";
import PropTypes from "prop-types";
import Styles from "./TodoItem.module.scss";

function TodoItem({ data }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className={Styles.container}>
      <div className={Styles.text_container}>
        <h3>3</h3>
        <div>
          <p
            className={Styles.todo_text}
            style={{ textDecoration: isChecked ? "line-through" : "none" }}
          >
            asdhfasdfljsdfasdfasfasdfasdfasdfsaasdfaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </p>
        </div>
      </div>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
    </div>
  );
}

TodoItem.prototype = { data: PropTypes.shape };

export default TodoItem;
