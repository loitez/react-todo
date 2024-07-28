import {useEffect, useState} from "react";

export const useGetTodo = (id) => {
    const [todos, setTodos] = useState([])
        const todo = fetch(`http://localhost:3001/todos/${id}`)
            .then((loadedData) => loadedData.json())
            .then((loadedTodo) => {
                console.log(loadedTodo)
                return loadedTodo;
            })
    return {todo}
}