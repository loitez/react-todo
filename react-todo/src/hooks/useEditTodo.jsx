export const useEditTodo = (refreshTodos, text, id) => {
    const editTodo = () => {
        const editedTodoText = prompt('Edit task', text)
        if (editedTodoText.length > 0) {
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
        } else {
            alert('Task should not be empty')
        }
    }
    return editTodo
}