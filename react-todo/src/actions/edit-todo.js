import {todosEndpoint} from "../endpoint";

export const editTodo = (id, editedTodoText) => {
    // fetch
    return (dispatch) => {
        fetch(todosEndpoint + '/' + id,
            {
                method: 'PUT',
                headers: {'Content-Type': 'application/json;charset=utf-8'},
                body: JSON.stringify({
                    title: editedTodoText,
                    id: id,
                    isShown: true
                })
            })
            .then((loadedData) => loadedData.json())
            .then((newTodo) => {
                dispatch({
                    type: 'EDIT_TODO',
                    payload: {newTodo: newTodo, id: id}
                });
            });
    };
};