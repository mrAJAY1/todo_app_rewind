import React, { useEffect, useState } from "react";
import { Header, TodoBody, TodoForm } from "./components";
import "./App.scss";

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTask = (userInput) => {
    setTodoList((prevTodoList) => {
      const updatedTodoList = [
        ...prevTodoList,
        { id: prevTodoList.length + 1, userInput, isCompleted: false },
      ];
      localStorage.setItem("todoList", JSON.stringify(updatedTodoList));
      return updatedTodoList;
    });
  };

  const removeTask = (id) => {
    setTodoList((prevTodoList) => {
      const updatedTodoList = prevTodoList.filter((item) => item.id !== id);
      localStorage.setItem("todoList", JSON.stringify(updatedTodoList));
      return updatedTodoList;
    });
  };
  // Load the todoList array from localStorage on component mount
  useEffect(() => {
    const savedTodoList = localStorage.getItem("todoList");
    if (savedTodoList) {
      setTodoList(JSON.parse(savedTodoList));
    }
  }, []);

  return (
    <div className="app">
      <Header />
      <TodoForm updateList={addTask} />
      <TodoBody todoList={todoList} removeTask={removeTask} />
    </div>
  );
}

export default App;
