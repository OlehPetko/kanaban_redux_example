const initialState = {
    todos: [
        {id: Math.random(), title: 'Liverpool', openTodoDelete: true, openTodoUpdate: true, done: false},
        {id: Math.random(), title: 'Toronto', openTodoDelete: true, openTodoUpdate: true, done: true},
        {id: Math.random(), title: 'Vancouver', openTodoDelete: true, openTodoUpdate: true, done: true},
        {id: Math.random(), title: 'Cancun', openTodoDelete: true, openTodoUpdate: true, done: true},
    ],
    columns: ['todo', 'progress', 'review', 'done'],
    cards: [
        {id: Math.random(), name: 'React', status: 'todo', openCardDelete: true, openCardUpdate: true, doneCard: true},
        {id: Math.random(), name: 'C_Sharp', status: 'progress', openCardDelete: true, openCardUpdate: true, doneCard: true},
        {id: Math.random(), name: 'JavaScript', status: 'review', openCardDelete: true, openCardUpdate: true, doneCard: true},
        {id: Math.random(), name: 'Java', status: 'done', openCardDelete: true, openCardUpdate: true, doneCard: true},
    ],
    counter: [
        {id: Math.random(), valueCounter: 0},
        {id: Math.random(), valueCounter: 1},
        {id: Math.random(), valueCounter: 2},
    ]
}
const tasks = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, {id: Math.random(), title: action.payload, openTodoDelete: true, openTodoUpdate: true, doneCard: true}]
            }
        case 'DELETE_ALL_TODOS':
            return {
                ...state, todos: []
            }
        case 'DELETE_TODO':
            return {
                ...state, todos: state.todos.filter(el => el.id !== action.payload)
            }
        case 'OPEN_DELETE_TODO':
            return {
                ...state,
                todos: state.todos.map(el => el.id === action.payload ? {
                    ...el,
                    openTodoDelete: !el.openTodoDelete
                } : el)
            }
        case 'OPEN_UPDATE_TODO':
            return {
                ...state,
                todos: state.todos.map(el => el.id === action.payload ? {
                    ...el,
                    openTodoUpdate: !el.openTodoUpdate
                } : el)
            }
        case 'SAVE_TODO':
            return {
                ...state, todos: state.todos.map(el => el.id === action.payload.todoId ? {
                    ...el, title: action.payload.updateTodo,
                    openTodoUpdate: !el.openTodoUpdate
                } : el)
            }
        case 'MARK_DONE_TODO': return {
            ...state, todos: state.todos.map(el => el.id === action.payload ?
                {...el, done: !el.done} : el)
        }
        case 'MOVE_TODO':
            const newTodos = [...state.todos]
            const currentTodo = newTodos[action.payload.i]
            const nextTodo = newTodos[action.payload.i + action.payload.todoValue]
            newTodos[action.payload.i] = nextTodo
            newTodos[action.payload.i + action.payload.todoValue] = currentTodo



        case 'ADD_CARD':
            return {
                ...state, cards: [...state.cards,
                    {id: Math.random(), name: action.payload, status: 'todo', openCardDelete: true, openCardUpdate: true, doneCard: true}
                    ]
            }
        case 'OPEN_DELETE_CARD':
            return {
                ...state,
                cards: state.cards.map(el => el.id === action.payload ? {
                    ...el,
                    openCardDelete: !el.openCardDelete
                } : el)
            }
        case 'DELETE_CARD':
            return {
                ...state, cards: state.cards.filter(el => el.id !== action.payload)
            }
        case 'OPEN_UPDATE_CARD':
            return {
                ...state,
                cards: state.cards.map(el => el.id === action.payload ? {
                    ...el,
                    openCardUpdate: !el.openCardUpdate
                } : el)
            }
        case 'SAVE_CARD':
            return {
                ...state, cards: state.cards.map(el => el.id === action.payload.cardId ? {
                    ...el, openCardUpdate: !el.openCardUpdate, name: action.payload.updateCard
                } : el)
            }
        case 'MOVE_CARD' :
            return {
                ...state, cards: state.cards.map(el => el.id === action.payload.cardId ?
                    {
                        ...el,
                        status: state.columns[state.columns.indexOf(el.status) + action.payload.cardValue]
                    } : el)
            }
        case 'DELETE_ALL_CARDS' :
            return {
                ...state, cards: []
            }
        case 'MARK_DONE_CARD':
            return {
                ...state, cards: state.cards.map(el => el.id === action.payload ? {...el, doneCard: !el.doneCard} : el)
            }
        case 'PLUS_MINUS': return {
            ...state, counter: state.counter.map(el => el.id === action.payload.counterId ?
                {...el, valueCounter: el.valueCounter + action.payload.counterValue } : el
            )
        }
        default:
            return state

    }
}
export default tasks