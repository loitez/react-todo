import './App.module.css';
import styles from './App.module.css'
import * as React from 'react';
import {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import List from '@mui/material/List';
import {TodoItem} from "./components/todo-item";


export const App = () => {

    const [todos, setTodos] = useState([])


    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((loadedData) => loadedData.json())
            .then((loadedTodos) => {
                setTodos(loadedTodos);
            })
    }, []);

  return (
      <div className={styles.wrapper}>
          <h1>Todo App</h1>
          <div className={styles.buttonGroup}>
              <Button variant="contained">Add Task</Button>
              <FormControl className={styles.selectCustom} sx={{ m: 1, minWidth: 120 }}>
                  <Select
                      value={age}
                      onChange={handleChange}
                      displayEmpty
                      inputProps={{ 'aria-label': 'Without label' }}
                  >
                      <MenuItem value="">
                          <em>All</em>
                      </MenuItem>
                      <MenuItem value={10}>Alphabet</MenuItem>
                      <MenuItem value={20}>No alphabet</MenuItem>
                  </Select>
              </FormControl>



          </div>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              {todos.map((todo) => {
                  const labelId = `checkbox-list-label-${todo}`;

                  return (
                      <TodoItem value={labelId} todo={todo} key={todo.id}/>
                  );
              })}
          </List>
      </div>
  )
}
