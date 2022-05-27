import {connect} from "react-redux";
import {useState} from "react";

function Todo(props) {

    const {todos} = props
    const [newTodo, setNewTodo] = useState([])
    const [updateTodo, setUpdateTodo] = useState([])
    const addTodo = () => {
        props.addNewTodo(newTodo)
        setNewTodo([])
    }
    const saveHandlerUpdate = (todoId) => {
        props.saveUpdate(todoId, updateTodo)
        setUpdateTodo([])
    }
    const openHandlerWindowUpdate = (todoId) => {
        props.openWindowUpdate(todoId)
        setUpdateTodo([])
    }
    return (
        <div>
            <h2>TO DO</h2>
            <input placeholder='new todo' value={newTodo} onChange={e => setNewTodo(e.target.value)}/>
            <button onClick={addTodo}>add to do</button>
            <button onClick={() => props.deleteAllTodos()}>delete all todos</button>
            {todos.map((todo, i) =>
                <div key={todo.id}>
                    <h4>
                        <input type="checkbox" onClick={() => props.markDoneTodo(todo.id)}/>
                        {i !== 0 && <button onClick={() => props.moveTodo(i, -1)}>▲</button>}
                        {todo.title}
                        {i !== todos.length - 1 && <button onClick={() => props.moveTodo(i, +1)}>▼</button>}
                        {todo.openTodoDelete ?
                            <button onClick={() => props.openWindowDelete(todo.id)}>delete</button>
                            :
                            <div>
                                <button onClick={() => props.deleteTodo(todo.id)}>delete?</button>
                                <button onClick={() => props.openWindowDelete(todo.id)}>cancel</button>
                            </div>
                        }
                        {todo.openTodoUpdate ?
                            <button onClick={() => props.openWindowUpdate(todo.id)}>update</button>
                            :
                            <div>
                                <input value={updateTodo} onChange={e => setUpdateTodo(e.target.value)}/>
                                <button onClick={() => saveHandlerUpdate(todo.id)}>save</button>
                                <button onClick={() => openHandlerWindowUpdate(todo.id)}>cancel</button>
                            </div>
                        }
                    </h4>
                </div>
            )}
        </div>
    );
}

const mapStateToProps = (state) => ({
    todos: state.todos,

})
const mapDispatchToProps = (dispatch) => ({
    addNewTodo: (newTodo) => dispatch({type: 'ADD_TODO', payload: newTodo}),
    deleteTodo: (todoId) => dispatch({type: 'DELETE_TODO', payload: todoId}),
    openWindowDelete: (todoId) => dispatch({type: 'OPEN_DELETE_TODO', payload: todoId}),
    openWindowUpdate: (todoId) => dispatch({type: 'OPEN_UPDATE_TODO', payload: todoId}),
    saveUpdate: (todoId, updateTodo) => dispatch({type: 'SAVE_TODO', payload: {todoId, updateTodo}}),
    moveTodo: (i, todoValue) => dispatch({type: 'MOVE_TODO', payload: {i, todoValue}}),
    deleteAllTodos: () => dispatch({type: 'DELETE_ALL_TODOS'}),
    markDoneTodo: (todoId) => dispatch({type: 'MARK_DONE_TODO', payload: todoId})
})
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
