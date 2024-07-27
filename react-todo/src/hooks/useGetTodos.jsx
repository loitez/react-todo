import {useEffect, useState} from "react";

export const useGetTodos = (refreshTodosFlag, alphabetFlag) => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/todos')
            .then((loadedData) => loadedData.json())
            .then((loadedTodos) => {
                alphabetFlag ? setTodos(loadedTodos.sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1)) : setTodos(loadedTodos);
            })
    }, [refreshTodosFlag, alphabetFlag]);

    return {todos}

}