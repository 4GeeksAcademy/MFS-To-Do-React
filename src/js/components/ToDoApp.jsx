import react, { useState } from 'react'
function ToDoApp() {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState('');

    const handleChange = (e) => {
        setTodo(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.trim() !== '') {
            setTodos([...todos, todo.trim()]);
            setTodo('');
        }
    };

    const handleDelete = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    let counter;
    if (todos.length === 1) {
        counter = '1 tarea pendiente';
    } else {
        counter = `${todos.length} tareas pendientes`;
    }
    return (
        // GENERAR COPN BOOTSTRAP!!!!
        <div className="container">
        <div className="to-do-container ">
            <h1 className="title">To Do List</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="¿Qué tareas necesitas hacer?"
                    value={todo}
                    onChange={handleChange}
                />
            </form>

            <ul className="task-list ">
                {todos.length === 0 ? (
                    <li className="no-task">Aún sin tareas, ¡Ingresa tus pendientes!.
                    </li>
                ) : (
                    todos.map((todo, index) => (
                        <li key={index} className="task-item  d-flex justify-content-between align-items-center">
                            <span>{todo}</span>
                            <button type="button" className="btn  btn-sm delete-button"
                                onClick={() => handleDelete(index)}
                            >X</button>

                        </li>
                    ))
                )}
            </ul>
            <p className="todo-count"> {counter} </p>
        </div>
        </div>
    );
}

export default ToDoApp;
