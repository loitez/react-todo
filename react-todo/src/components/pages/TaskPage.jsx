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
import {useDispatch, useSelector} from "react-redux";
import {selectTodos} from "../../selectors";
import {deleteTodo, editTodo, setLoadingStatus} from "../../actions";

export const TaskPage = (props) => {
    const navigate = useNavigate();
    const params = useParams();

    const dispatch = useDispatch()

    const todos = useSelector(selectTodos)

    const todo = todos.find(item => item.id === params.id);

    const {isLoading, setIsLoading} = props;

    useEffect(() => {
        if (!todo) {
            console.log('Todo not found, redirecting to /404');
            navigate('/404', { replace: true });
        }
        setIsLoading(false)
    }, [navigate, todo]);

    if (!todo) return null;

    const onGoBackBtn = () => {
        navigate(-1)
    }

    const onDeleteTodoClick = () => {
        console.log(todo.id)
        dispatch(deleteTodo(todo.id))
        navigate(-1)
    }

    const onEditTodoClick = () => {
        const editedTodoText = prompt('Edit task', todo.title) || todo.title;
        if (editedTodoText.length > 0) {
            dispatch(editTodo(todo.id, editedTodoText))
        } else {
            alert('Task should not be empty')
        }
    }

    return (
        <>
            <div className={styles.buttonGroup}>
                <Button variant="outlined" onClick={onGoBackBtn}>
                    <ArrowBackIcon></ArrowBackIcon>
                    Back
                </Button>
                <Button variant="outlined" onClick={onDeleteTodoClick}>
                    <DeleteOutlineIcon></DeleteOutlineIcon>
                    Delete Task
                </Button>
                <Button variant="contained" onClick={onEditTodoClick}>
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