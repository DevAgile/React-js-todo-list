import React from "react";
import Todo from "./Todo";

const TodoList = ({ Todos, SetTodos, FilteredTodos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {FilteredTodos.map((todo) => (
                    <Todo key={todo.id} text={todo.text} Todos={Todos} SetTodos={SetTodos} todo={todo} />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;