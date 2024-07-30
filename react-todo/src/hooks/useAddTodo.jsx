export const useAddTodo = (refreshTodos) => {
    const addTodo = () => {

        const newTodoText = prompt('Type task title')

        fetch(`http://localhost:3000/todos/`,
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json;charset=utf-8'},
                body: JSON.stringify({
                    title: newTodoText,
                    isShown: true
                })
            })
            .then((loadedData) => loadedData.json())
            .then((loadedTodos) => {
                refreshTodos()
            })
    }
    return addTodo
}