import './App.module.css';
import styles from './App.module.css'
import * as React from 'react';
import {useEffect, useState} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import {MainPage} from './components/pages/MainPage'
import {TaskPage} from './components/pages/TaskPage'
import {NotFoundPage} from './components/pages/NotFoundPage'
import {useGetTodos} from "./hooks/useGetTodos";
import {LoaderSpin} from './components/loader-spin'
import {store} from "./store";
import {Provider, useDispatch, useSelector} from "react-redux";
import {selectTodos} from "./selectors/select-todos";
import {getTodos, setLoadingStatus} from "./actions";
import {selectLoadingStatus} from "./selectors/select-loading-status";

export const App = () => {

    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(true);

    const [refreshTodosFlag, setRefreshTodosFlag] = useState(false)
    // const [alphabetFlag, setAlphabetFlag] = useState(false);

    dispatch(getTodos(isLoading, setIsLoading))


    // console.log(todos)


    if (isLoading) {
        return <LoaderSpin />
    }

    return (
      <div className={styles.wrapper}>
          <h1>Todo App</h1>
          <Routes>
              <Route path="/" element={< MainPage isLoading={isLoading} setIsLoading={setIsLoading}/> } />
              <Route path="/task/:id" element={< TaskPage isLoading={isLoading} setIsLoading={setIsLoading}/>}/>
              <Route path="/404" element={<NotFoundPage/>} />
              <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
      </div>
  )
}

