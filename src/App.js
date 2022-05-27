import Kanban from "./Kanban/Kanban";
import Todo from "./Todo/Todo";
import {useState} from "react";
import Counter from "./Counter/Counter";

function App(props) {

    const [app, setApp] = useState('')

  return (
    <div>
        <button onClick={() => setApp('Todo')}>To Do</button>
        <button onClick={() => setApp('Kanban')}>Kanban</button>
        <button onClick={() => setApp('Counter')}>Counter</button>
        {app === 'Kanban' && <Kanban />  }
        {app === 'Todo' &&   <Todo />}
        {app === 'Counter' && <Counter />}
    </div>
  );
}

export default App;
