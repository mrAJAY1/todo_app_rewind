import React, { useState } from "react";
import PropTypes from "prop-types";
import Style from "./Todoform.module.scss";

function TodoForm({ updateList }) {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateList(userInput);
    setUserInput("");
  };

  return (
    <div className="container mt-30">
      <form onSubmit={handleSubmit} className={Style.form}>
        <input type="text" value={userInput} onChange={handleChange} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

TodoForm.propTypes = {
  updateList: PropTypes.func.isRequired,
};

export default TodoForm;
