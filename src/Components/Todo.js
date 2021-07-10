import React from "react";

const Todo = ({ text, todo, Todos, SetTodos }) => {
    const DeleteHandler = () => {
        SetTodos(Todos.filter(el => el.id !== todo.id))
    };
    const completeHandler = () => {
        SetTodos(Todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
            <button className="trash-btn" onClick={DeleteHandler}><i className="fas fa-trash"></i></button>
        </div>
    );
}

export default Todo;