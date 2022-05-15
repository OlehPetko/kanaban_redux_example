const initialState = {
    todos: [
        {id: Math.random(), title: 'Liverpool', openDelete: true},
        {id: Math.random(), title: 'Toronto', openDelete: true},
        {id: Math.random(), title: 'Vancouver', openDelete: true},
        {id: Math.random(), title: 'Cancun', openDelete: true},
    ],
    columns: ['todo', 'progress', 'review', 'done'],
    cards: [
        {id: Math.random(), name: 'React', status: 'todo', moveCard: true, openCardDelete: true, openCardUpdate: true},
        {
            id: Math.random(),
            name: 'C_Sharp',
            status: 'progress',
            moveCard: true,
            openCardDelete: true,
            openCardUpdate: true
        },
        {
            id: Math.random(),
            name: 'JavaScript',
            status: 'review',
            moveCard: true,
            openCardDelete: true,
            openCardUpdate: true
        },
        {id: Math.random(), name: 'Java', status: 'done', moveCard: true, openCardDelete: true, openCardUpdate: true},
    ]
}
const tasks = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO': return {
            ...state, todos: [...state.todos, {id: Math.random(), title: action.payload, openDelete: true}]
        }
        case 'DELETE_TODO': return {
            ...state, todos: state.todos.filter(el => el.id !== action.payload)
        }
        case 'OPEN_DELETE_TODO': return {
            ...state, todos: state.todos.map(el => el.id === action.payload ? {...el, openDelete: !el.openDelete } : el)
        }
        case 'ADD_CARD': return {
            ...state, cards: [...state.cards,
        {id: Math.random(), name: action.payload, status: 'todo', moveCard: true, openCardDelete: true, openCardUpdate: true}]
        }
        default:
            return state

    }
}
export default tasks