import ListItem from "@mui/material/ListItem";
import * as React from "react";
import Button from '@mui/material/Button';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useDeleteTodo} from "../../hooks/useDeleteTodo";
import {useEditTodo} from '../../hooks/useEditTodo'
import styles from '../../App.module.css'
import {useNavigate, useParams} from 'react-router-dom'
import {useEffect, useContext} from "react";
import { AppContext } from '../../context';

export const TaskPage = () => {
    const deleteTodo = useDeleteTodo
    const editTodo = useEditTodo
    const navigate = useNavigate();
    const params = useParams();

    const { refreshTodos, todos } = useContext(AppContext);

    const todo = todos.find(item => item.id === params.id);

    useEffect(() => {
        if (!todo) {
            console.log('Todo not found, redirecting to /404');
            navigate('/404', { replace: true });
        }
    }, [navigate, todo]);

    if (!todo) return null;

    const onGoBackBtn = () => {
        navigate(-1)
    }

    return (
        <>
            <div className={styles.buttonGroup}>
                <Button variant="outlined" onClick={onGoBackBtn}>
                    <ArrowBackIcon></ArrowBackIcon>
                    Back
                </Button>
                <Button variant="outlined" onClick={deleteTodo(refreshTodos, todo.id)}>
                    <DeleteOutlineIcon></DeleteOutlineIcon>
                    Delete Task
                </Button>
                <Button variant="contained" onClick={editTodo(refreshTodos, todo.title, todo.id)}>
                    <EditIcon></EditIcon>
                    Edit Task
                </Button>

            </div>
            <ListItem
                key={todo}
                disablePadding
            >
                <p className={styles.todoText}>{todo.title}</p>
            </ListItem>
        </>
    )
}