import {useState} from "react";
import styles from "../../App.module.css";
import Button from "@mui/material/Button";
import {useAddTodo} from "../../hooks/useAddTodo";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import {TodoItem} from "../todo-item";
import * as React from "react";
import { AppContext } from '../../context';
import { useContext } from 'react';

export const MainPage = (props) => {
    let {setAlphabetFlag, alphabetFlag} = props;
    const [searchBtnValue, setSearchBtnValue] = useState('');

    const { refreshTodos, todos } = useContext(AppContext);

    const onSearchBtnChange = (e) => {
        setSearchBtnValue(e.target.value);
        todos.map((todo) => {
            !todo.title.includes(e.target.value) ? todo.isShown = false : todo.isShown = true
        })
    }

    const onAlphabetBtnClick = () => {
        setAlphabetFlag(!alphabetFlag)
    }

    return (
        <>
            <div className={styles.buttonGroup}>
                <Button variant="contained" onClick={useAddTodo(refreshTodos)}>Add Task</Button>
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