import {useState} from "react";
import styles from "../../App.module.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import {TodoItem} from "../todo-item";
import * as React from "react";
import {selectTodos} from "../../selectors";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, getTodos} from "../../actions";

export const MainPage = (props) => {
    const [alphabetFlag, setAlphabetFlag] = useState(false);
    const dispatch = useDispatch()

    const [searchBtnValue, setSearchBtnValue] = useState('');

    const todos = useSelector(selectTodos)

    const {isLoading, setIsLoading} = props;

    const onSearchBtnChange = (e) => {
        setSearchBtnValue(e.target.value);
        todos.map((todo) => {
            !todo.title.includes(e.target.value) ? todo.isShown = false : todo.isShown = true
        })
    }

    const onAlphabetBtnClick = () => {
        setAlphabetFlag(!alphabetFlag)
        dispatch(getTodos(isLoading, setIsLoading, !alphabetFlag))
    }

    const onAddTodoClick = () => {
        const newTodoText = prompt('Type task title')
        if (newTodoText && newTodoText.trim().length > 0) {
            dispatch(addTodo(newTodoText))
        } else {
            alert('Task should not be empty')
        }
    }

    return (
        <>
            <div className={styles.buttonGroup}>
                <Button variant="contained" onClick={onAddTodoClick}>Add Task</Button>
                <Button variant="outlined" onClick={onAlphabetBtnClick}>
                    {alphabetFlag ? 'Sort non-alphabetically' : 'Sort alphabetically'}
                </Button>
                <TextField id="outlined-basic" label="Search" variant="outlined" onChange={onSearchBtnChange} value={searchBtnValue}/>
            </div>
            {todos.length > 0 ?
                <List sx={{width: '100%', bgcolor: 'background.paper'}}>
                    {todos.map((todo) => {
                        const labelId = `checkbox-list-label-${todo}`;
                        return (
                            <TodoItem value={labelId} todo={todo} key={todo.id}/>
                        );
                    })}
                </List>
                : <p>No Tasks Found</p>
            }
        </>
    )
}