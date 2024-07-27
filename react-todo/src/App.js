import './App.module.css';
import styles from './App.module.css'
import * as React from 'react';
import {useState} from 'react';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import TextField from '@mui/material/TextField';
import {TodoItem} from "./components/todo-item";
import { useGetTodos } from './hooks/useGetTodos'
import {useAddTodo} from "./hooks/useAddTodo";


export const App = () => {

    const [refreshTodosFlag, setRefreshTodosFlag] = useState(false)
    const refreshTodos = () => setRefreshTodosFlag(!refreshTodosFlag)
    const [searchBtnValue, setSearchBtnValue] = useState('');
    const [alphabetFlag, setAlphabetFlag] = useState(false);

    let {todos} = useGetTodos(refreshTodosFlag, alphabetFlag)

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
      <div className={styles.wrapper}>
          <h1>Todo App</h1>
          <div className={styles.buttonGroup}>
              <Button variant="contained" onClick={useAddTodo(refreshTodos)}>Add Task</Button>
              <Button variant="outlined" onClick={onAlphabetBtnClick}>
                  { alphabetFlag ? 'Sort non-alphabetically' : 'Sort alphabetically' }
              </Button>
              <TextField id="outlined-basic" label="Search" variant="outlined" onChange={onSearchBtnChange} value={searchBtnValue}/>

          </div>
          { todos.length > 0 ?
              <List sx={{ width: '100%', bgcolor: 'background.paper' }}>

                  {todos.map((todo) => {
                      const labelId = `checkbox-list-label-${todo}`;
                      return (
                          <TodoItem value={labelId} todo={todo} refreshTodos={refreshTodos} key={todo.id}/>
                      );
                  })}
              </List>
              : <p>No Tasks Found</p>
          }
      </div>
  )
}

