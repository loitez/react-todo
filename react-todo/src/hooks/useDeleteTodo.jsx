export const useDeleteTodo = (refreshTodos, id) => {
    const deleteTodo = () => {
        fetch(`http://localhost:3001/todos/${id}`,
            {
                method: 'DELETE'
            })
            .then((loadedData) => loadedData.json())
            .then((loadedTodos) => {
                refreshTodos()
            })
    }
    return deleteTodo
}