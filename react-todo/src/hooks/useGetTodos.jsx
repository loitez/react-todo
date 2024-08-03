import {useEffect, useState} from "react";


export const useGetTodos = (refreshTodosFlag, alphabetFlag = false, setIsLoading) => {
    const [todos, setTodos] = useState([])
    useEffect(() => {

    }, [refreshTodosFlag, alphabetFlag, setIsLoading]);
    return {todos}
}