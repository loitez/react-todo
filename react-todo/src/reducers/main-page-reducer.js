const initialMainPageState = {}

export const mainPageReducer = (state = initialMainPageState, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'GET_TODOS': {
            return payload
        }
        case 'ADD_TODO': {
            return [...state, payload]
        }
        case 'EDIT_TODO': {
            const {newTodo, id} = payload;
            let copiedArray = [...state]
            let oldItem = copiedArray.find(item => item.id === id)
            copiedArray.splice(copiedArray.indexOf(oldItem), 1, newTodo)
            return copiedArray
        }
        case 'DELETE_TODO': {
            return [...state].filter(item => item.id !== payload.id)
        }
        default:
            return initialMainPageState
    }
}