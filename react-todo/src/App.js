import './App.module.css';
import styles from './App.module.css'
import * as React from 'react';
import {useState} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import {MainPage} from './components/pages/MainPage'
import {TaskPage} from './components/pages/TaskPage'
import {NotFoundPage} from './components/pages/NotFoundPage'
import {useGetTodos} from "./hooks/useGetTodos";
import {LoaderSpin} from './components/loader-spin'
import { AppContext } from './context';

export const App = () => {

    const [refreshTodosFlag, setRefreshTodosFlag] = useState(false)
    const [alphabetFlag, setAlphabetFlag] = useState(false);
    const refreshTodos = () => setRefreshTodosFlag(!refreshTodosFlag)

    const [isLoading, setIsLoading] = useState(true);
    const {todos} = useGetTodos(refreshTodosFlag, alphabetFlag, setIsLoading)

    if (isLoading) {
        return <LoaderSpin />
    }

    return (
        <AppContext.Provider value={{todos, refreshTodos}}>
          <div className={styles.wrapper}>
              <h1>Todo App</h1>
              <Routes>
                  <Route path="/" element={< MainPage
                      setAlphabetFlag={setAlphabetFlag}
                      alphabetFlag={alphabetFlag}
                  /> } />
                  <Route path="/task/:id" element={< TaskPage/>}
                  />
                  <Route path="/404" element={<NotFoundPage/>} />
                  <Route path="*" element={<Navigate to="/404" />} />
              </Routes>
          </div>
        </AppContext.Provider>
  )
}

