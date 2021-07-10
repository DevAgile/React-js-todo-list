import React from "react";

function Form({ InputText, SetInputText, Todos, SetTodos, SetStatus }) {
    const InputTextHandler = (e) => {
        // console.log(e.target.value);
        SetInputText(e.target.value);
    }
    const SubmitTodoHandler = (e) => {
        e.preventDefault();
        SetTodos([
            ...Todos, { text: InputText, completed: false, id: Math.random() * 1000 }
        ]);
        SetInputText("");
    };
    const StatusHandler = (e) => {
        SetStatus(e.target.value);
    }
    return (
        <form>
            <input onChange={InputTextHandler} type="text" className="todo-input" value={InputText} />
            <button onClick={SubmitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={StatusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;