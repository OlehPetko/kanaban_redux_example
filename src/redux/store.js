import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import tasks from "./reducer";


const store = createStore(
    tasks,
    composeWithDevTools(applyMiddleware(thunk))
)

 export default store