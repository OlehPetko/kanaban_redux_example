const initialState = {
    todos: [
        {id: Math.random(), title: 'Liverpool', openTodoDelete: true, openTodoUpdate: true,},
        {id: Math.random(), title: 'Toronto', openTodoDelete: true, openTodoUpdate: true},
        {id: Math.random(), title: 'Vancouver', openTodoDelete: true, openTodoUpdate: true},
        {id: Math.random(), title: 'Cancun', openTodoDelete: true, openTodoUpdate: true},
    ],
    columns: ['todo', 'progress', 'review', 'done'],
    cards: [
        {id: Math.random(), name: 'React', status: 'todo', moveCard: true, openCardDelete: true, openCardUpdate: true},
        {id: Math.random(), name: 'C_Sharp', status: 'progress', moveCard: true, openCardDelete: true, openCardUpdate: true},
        {id: Math.random(), name: 'JavaScript', status: 'review', moveCard: true, openCardDelete: true, openCardUpdate: true},
        {id: Math.random(), name: 'Java', status: 'done', moveCard: true, openCardDelete: true, openCardUpdate: true},
    ]
}
const tasks = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, {
                    id: Math.random(),
                    title: action.payload,
                    openTodoDelete: true,
                    openTodoUpdate: true
                }]
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
        case 'MOVE_TODO':
            return {
                ...state, todos: state.todos.map(el => el.id === action.payload.todoId ? {
                    ...el, todos: state.title[state.title.indexOf(el.title) + action.payload.todoValue]
                } : el)
            }
        case 'ADD_CARD':
            return {
                ...state, cards: [...state.cards,
                    {id: Math.random(), name: action.payload, status: 'todo', moveCard: true, openCardDelete: true, openCardUpdate: true}]
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
        default:
            return state

    }
}
export default tasks