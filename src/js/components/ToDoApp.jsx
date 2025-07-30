import react, {useState} from 'react'
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

    return (
        // GENERAR COPN BOOTSTRAP!!!!
        <div className="to-do-container"> 
            <h1 className="title">to do!</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="input-task"
                    placeholder="¿Qué tareas necesitas hacer?"
                    value={todo}
                    onChange={handleChange}
                />
            </form>
           {/* // GENERAR COPN BOOTSTRAP!!!! */}
            <ul className="task-list">
                {todos.length === 0 ? (
                    <li className="no-task">Aún sin tareas, ¡Ingresa tus pendientes!.</li>
                ) : (
                    todos.map((todo, index) => (
                        <li key={index} className="task-item">
                            <span>{todo}</span>
                            <button
                                className="delete-button"
                                onClick={() => handleDelete(index)}
                            >
                                
                           CLICK! {/* CLICK! poner icono! */}
                            </button>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}

export default ToDoApp;
