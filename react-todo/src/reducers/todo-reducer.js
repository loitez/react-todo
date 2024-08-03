const initialTodoState = {}

export const todoReducer = (state = initialTodoState, action) => {
    const { type, payload } = action;

    switch (type) {
        default:
            return initialTodoState
    }
}