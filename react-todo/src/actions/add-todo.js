import {todosEndpoint} from "../endpoint";

export const addTodo = (newTodoText) => {
    // fetch
    return (dispatch) => {
        fetch(todosEndpoint,
                {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json;charset=utf-8'},
                    body: JSON.stringify({
                        title: newTodoText,
                        isShown: true
                    })
                })
        .then((loadedData) => loadedData.json())
        .then((todoFromServer) => {
            dispatch({
                type: 'ADD_TODO',
                payload: todoFromServer

            });
        });
    };
};