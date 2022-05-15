
import Kanban from "./Kanban/Kanban";
import Todo from "./Todo/Todo";
import {useState} from "react";

function App(props) {

    const [app, setApp] = useState('')

  return (
    <div>
        <button onClick={() => setApp('Todo')}>To Do</button>
        <button onClick={() => setApp('Kanban')}>Kanban</button>
        {app === 'Kanban' && <Kanban />  }
        {app === 'Todo' &&   <Todo />}
    </div>
  );
}

export default App;
