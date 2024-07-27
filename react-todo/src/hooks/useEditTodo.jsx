export const useEditTodo = (refreshTodos, text, id) => {
    const editTodo = () => {
        const editedTodoText = prompt('Отредактируйте текст задачи', text)

        fetch(`http://localhost:3001/todos/${id}`,
            {
                method: 'PUT',
                headers: {'Content-Type': 'application/json;charset=utf-8'},
                body: JSON.stringify({
                    title: editedTodoText,
                    id: id,
                    isShown: true
                })
            })
            .then((loadedData) => loadedData.json())
            .then((loadedTodos) => {
                refreshTodos()
            })
    }
    return editTodo
}