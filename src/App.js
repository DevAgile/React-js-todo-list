import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./Components/Form"
import TodoList from "./Components/TodoList";


function App() {
  const [InputText, SetInputText] = useState("");
  const [Todos, SetTodos] = useState([]);
  const [Status, SetStatus] = useState("all");
  const [FilteredTodos, SetFilteredTodos] = useState([]);

  useEffect(() => {
    GetLocaltodos();
  }, [])

  useEffect(() => {
    switch (Status) {
      case 'completed':
        SetFilteredTodos(Todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        SetFilteredTodos(Todos.filter(todo => todo.completed === false))
        break;
      default:
        SetFilteredTodos(Todos);
        break;
    };
    localStorage.setItem("Todos", JSON.stringify(Todos));
  }, [Todos, Status])


  const GetLocaltodos = () => {
    if (localStorage.getItem("Todos" === null)) {
      localStorage.setItem("Todos", JSON.stringify([]));
    } else {
      let TodoLocal = JSON.parse(localStorage.getItem("Todos"))
      SetTodos(TodoLocal);
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Kevin's Todo List</h1>
      </header>
      <Form
        Todos={Todos}
        SetTodos={SetTodos}
        InputText={InputText}
        SetInputText={SetInputText}
        SetStatus={SetStatus}
      />
      <TodoList
        Todos={Todos}
        SetTodos={SetTodos}
        FilteredTodos={FilteredTodos}
      />
    </div>
  );
}

export default App;