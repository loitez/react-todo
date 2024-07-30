import {useEffect, useState} from "react";

export const useGetTodos = (refreshTodosFlag, alphabetFlag = false, setIsLoading) => {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/todos')
            .then((loadedData) => loadedData.json())
            .then((loadedTodos) => {
                setTodos(loadedTodos)
                if (alphabetFlag === true) {
                    setTodos(loadedTodos.sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1))
                }
            })
            .finally(() => setIsLoading(false))
    }, [refreshTodosFlag, alphabetFlag, setIsLoading]);
    return {todos}
}