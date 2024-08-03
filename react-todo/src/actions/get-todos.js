import {todosEndpoint} from "../endpoint";
import {setLoadingStatus} from "./set-loading-status";

export const getTodos = (isLoading, setIsLoading, alphabetFlag = false) => {
    return (dispatch) => {
        fetch(todosEndpoint)
            .then((loadedData) => loadedData.json())
            .then((todosFromServer) => {
                if (alphabetFlag) {
                    todosFromServer.sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1)
                }
                setIsLoading(false)
                dispatch({
                    type: 'GET_TODOS',
                    payload: todosFromServer
                });
        })
    };
};