import React from "react";
import { Header, TodoBody, TodoForm } from "./components";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <TodoForm />
      <TodoBody />
    </div>
  );
}

export default App;
