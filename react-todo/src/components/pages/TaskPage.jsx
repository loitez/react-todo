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
import {useEffect, useState} from "react";

export const TaskPage = (props) => {
    const {refreshTodos, todos, isLoading} = props;

    const navigate = useNavigate();
    const params = useParams();

    const todo = todos.find(item => item.id === params.id);

    useEffect(() => {
        let isProductLoaded = false;
        if (todo) {
            isProductLoaded = true;
        }
        if (!isProductLoaded) {
            navigate('/404');
            return;
        }

    }, [navigate, params.id, todo])

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
                <Button variant="outlined" onClick={useDeleteTodo(refreshTodos, todo.id)}>
                    <DeleteOutlineIcon></DeleteOutlineIcon>
                    Delete Task
                </Button>
                <Button variant="contained" onClick={useEditTodo(refreshTodos, todo.title, todo.id)}>
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