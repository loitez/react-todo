import {todosEndpoint} from "../endpoint";

export const deleteTodo = (id) => {
    // fetch
    console.log('kkk')
    console.log(id)
    return (dispatch) => {
        fetch(todosEndpoint + '/' + id,
            {
                method: 'DELETE'
            })
            .then((loadedData) => loadedData.json())
            .then((deletedTodo) => {
                console.log(deletedTodo)
                dispatch({
                    type: 'DELETE_TODO',
                    payload: deletedTodo
                });
            });
    };
};