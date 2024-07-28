import IconButton from "@mui/material/IconButton";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import * as React from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useDeleteTodo} from "../../hooks/useDeleteTodo";
import {useEditTodo} from '../../hooks/useEditTodo'
import styles from '../../App.module.css'
import {Link, useNavigate, useParams} from 'react-router-dom'
import {useEffect, useState} from "react";
import {useAddTodo} from "../../hooks/useAddTodo";
import TextField from "@mui/material/TextField";
import {useGetTodos} from "../../hooks/useGetTodos";
import {NotFoundPage} from "./NotFoundPage";
import {useGetTodo} from "../../hooks/useGetTodo"

export const TaskPage = (props) => {

    const {refreshTodosFlag, refreshTodos, todos} = props;
    const navigate = useNavigate();

    const params = useParams();
    // const [todo, setTodo] = useState(todos.find(item => item.id === params.id))
    const todo = todos.find(item => item.id === params.id);
    useEffect(() => {
        if (!todo) {
            console.log('not todo')
            navigate('/404', {replace: true})
        }
    }, [todo])



    const labelId = `checkbox-list-label-${todo}`;

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
                secondaryAction={
                    <IconButton edge="end" aria-label="comments">

                    </IconButton>
                }
                disablePadding
            >
                <ListItemText id={labelId}>{todo.title}</ListItemText>
            </ListItem>
        </>
    )
}