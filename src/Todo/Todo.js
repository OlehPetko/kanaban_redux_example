import {connect} from "react-redux";
import {useState} from "react";

function Todo(props) {

    const {todos} = props
    const [newTodo, setNewTodo] = useState([])
    const addTodo = () => {
        props.addNewTodo(newTodo)
        setNewTodo([])
    }
    return (
        <div>
            <h2>TO DO</h2>
            <input placeholder='new todo' value={newTodo} onChange={e => setNewTodo(e.target.value)}/>
            <button onClick={addTodo}>add to do</button>
            {todos.map(todo =>
                <div key={todo.id}>
                    <h4>
                        {todo.title}
                        {todo.openDelete ?
                            <button onClick={() => props.openWindowDelete(todo.id)}>delete</button>
                            :
                            <div>
                                <button onClick={() => props.deleteTodo(todo.id)}>delete?</button>
                                <button onClick={() => props.openWindowDelete(todo.id)}>cancel</button>
                            </div>
                        }
                    </h4>
                </div>
            )}
        </div>
    );
}

const mapStateToProps = (state) => ({
    todos: state.todos
})
const mapDispatchToProps = (dispatch) => ({
    addNewTodo: (newTodo) => dispatch({type: 'ADD_TODO', payload: newTodo}),
    deleteTodo: (todoId) => dispatch({type: 'DELETE_TODO', payload: todoId}),
    openWindowDelete: (todoId) => dispatch({type: 'OPEN_DELETE_TODO', payload: todoId})
})
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
