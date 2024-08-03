import './App.module.css';
import styles from './App.module.css'
import * as React from 'react';
import {useState} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import {MainPage} from './components/pages/MainPage'
import {TaskPage} from './components/pages/TaskPage'
import {NotFoundPage} from './components/pages/NotFoundPage'
import {LoaderSpin} from './components/loader-spin'
import {useDispatch} from "react-redux";
import {getTodos} from "./actions";

export const App = () => {

    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(true);

    dispatch(getTodos(isLoading, setIsLoading))

    if (isLoading) {
        return <LoaderSpin />
    }

    return (
      <div className={styles.wrapper}>
          <h1>Todo App</h1>
          <Routes>
              <Route path="/" element={< MainPage isLoading={isLoading} setIsLoading={setIsLoading}/> } />
              <Route path="/task/:id" element={< TaskPage setIsLoading={setIsLoading}/>}/>
              <Route path="/404" element={<NotFoundPage/>} />
              <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
      </div>
  )
}

