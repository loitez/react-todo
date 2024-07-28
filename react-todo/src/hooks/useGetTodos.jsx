import {useEffect, useState} from "react";

export const useGetTodos = (refreshTodosFlag, alphabetFlag = false) => {
    const [todos, setTodos] = useState([])
    console.log('alph flag - ', alphabetFlag)
    useEffect(() => {
        fetch('http://localhost:3001/todos')
            .then((loadedData) => loadedData.json())
            .then((loadedTodos) => {
                console.log('loadedTodos', loadedTodos)
                alphabetFlag ? setTodos(loadedTodos.sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1)) : setTodos(loadedTodos);
                console.log(loadedTodos.sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1))
            })
    }, [refreshTodosFlag, alphabetFlag]);
    console.log('get todos - ', todos)
    return {todos}
}