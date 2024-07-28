import './App.module.css';
import styles from './App.module.css'
import * as React from 'react';
import {useState} from 'react';
import {Routes, Route, useParams, Link} from 'react-router-dom'
import {MainPage} from './components/pages/MainPage'
import {TaskPage} from './components/pages/TaskPage'
import {NotFoundPage} from './components/pages/NotFoundPage'
import {useGetTodos} from "./hooks/useGetTodos";



export const App = () => {

    const [refreshTodosFlag, setRefreshTodosFlag] = useState(false)
    const refreshTodos = () => setRefreshTodosFlag(!refreshTodosFlag)
    console.log('app js')
    let {todos} = useGetTodos(refreshTodosFlag)
    console.log(todos)

    return (
      <div className={styles.wrapper}>
          <h1>Todo App</h1>
          <Routes>
              <Route path="/" element={< MainPage
                  refreshTodosFlag={refreshTodosFlag}
                  refreshTodos={refreshTodos}
                  todos={todos}
              /> } />
              <Route path="/task/:id" element={< TaskPage
                  refreshTodosFlag={refreshTodosFlag}
                  refreshTodos={refreshTodos}
                  todos={todos}
              />} />
              <Route path="/404" element={<NotFoundPage/>} />
          </Routes>
      </div>
  )
}

