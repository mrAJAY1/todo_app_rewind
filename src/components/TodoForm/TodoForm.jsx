import React from "react";
import Style from "./Todoform.module.scss";

function TodoForm() {
  return (
    <div className={Style.container}>
      <form
        action=""
        onSubmit={(e) => e.preventDefault()}
        className={Style.form}
      >
        <input type="text" />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default TodoForm;
