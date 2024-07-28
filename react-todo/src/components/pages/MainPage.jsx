import {useState} from "react";
import {useGetTodos} from "../../hooks/useGetTodos";
import styles from "../../App.module.css";
import Button from "@mui/material/Button";
import {useAddTodo} from "../../hooks/useAddTodo";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import {TodoItem} from "../todo-item";
import * as React from "react";

export const MainPage = (props) => {
    console.log('MAIN PAGE')
    const [alphabetFlag, setAlphabetFlag] = useState(false);
    let {refreshTodosFlag, refreshTodos} = props;
    let {todos} = useGetTodos(refreshTodosFlag, alphabetFlag)
    // let {todos} = useGetTodos(refreshTodosFlag, alphabetFlag)
    const [searchBtnValue, setSearchBtnValue] = useState('');

    const onSearchBtnChange = (e) => {
        setSearchBtnValue(e.target.value);
        todos.map((todo) => {
            !todo.title.includes(e.target.value) ? todo.isShown = false : todo.isShown = true
        })
    }

    const onAlphabetBtnClick = () => {
        setAlphabetFlag(!alphabetFlag)
        console.log(alphabetFlag)
    }

    return (
        <>
            <div className={styles.buttonGroup}>
                <Button variant="contained" onClick={useAddTodo(refreshTodos)}>Add Task</Button>
                <Button variant="outlined" onClick={onAlphabetBtnClick}>
                    {alphabetFlag ? 'Sort non-alphabetically' : 'Sort alphabetically'}
                </Button>
                <TextField id="outlined-basic" label="Search" variant="outlined" onChange={onSearchBtnChange}
                           value={searchBtnValue}/>

            </div>
            {todos.length > 0 ?
                <List sx={{width: '100%', bgcolor: 'background.paper'}}>

                    {todos.map((todo) => {
                        const labelId = `checkbox-list-label-${todo}`;
                        return (
                            <TodoItem value={labelId} todo={todo} refreshTodos={refreshTodos} key={todo.id}/>
                        );
                    })}
                </List>
                : <p>No Tasks Found</p>
            }
        </>
    )
}