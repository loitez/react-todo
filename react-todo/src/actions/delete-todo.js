import {todosEndpoint} from "../endpoint";

export const deleteTodo = (id) => {
    return (dispatch) => {
        fetch(todosEndpoint + '/' + id,
            {
                method: 'DELETE'
            })
            .then((loadedData) => loadedData.json())
            .then((deletedTodo) => {
                dispatch({
                    type: 'DELETE_TODO',
                    payload: deletedTodo
                });
            });
    };
};