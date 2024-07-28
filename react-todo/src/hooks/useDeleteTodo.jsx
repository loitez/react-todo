import {useNavigate} from "react-router-dom";

export const useDeleteTodo = (refreshTodos, id) => {

    const navigate = useNavigate()

    const deleteTodo = () => {
        fetch(`http://localhost:3001/todos/${id}`,
            {
                method: 'DELETE'
            })
            .then((loadedData) => loadedData.json())
            .then((loadedTodos) => {
                refreshTodos()
                navigate(-1)
            })
    }
    return deleteTodo
}