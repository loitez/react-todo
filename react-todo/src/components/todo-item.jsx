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
import {useDeleteTodo} from "../hooks/useDeleteTodo";
import {useEditTodo} from '../hooks/useEditTodo'
import styles from '../App.module.css'


export const TodoItem = ({labelId, todo, refreshTodos}) => {

    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (todo) => () => {
        const currentIndex = checked.indexOf(todo);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(todo);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <ListItem
            key={todo}
            secondaryAction={
                <IconButton edge="end" aria-label="comments">

                </IconButton>
            }
            disablePadding
            className={todo.isShown ? styles.active : styles.hidden}
        >
            <ListItemButton role={undefined} onClick={handleToggle(todo)} dense>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={checked.indexOf(todo) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                    />
                </ListItemIcon>
                <ListItemText id={labelId}>{todo.title}</ListItemText>
                <ButtonGroup variant="text" aria-label="Basic button group">
                    <Button onClick={useDeleteTodo(refreshTodos, todo.id)}>
                        <DeleteOutlineIcon></DeleteOutlineIcon>
                    </Button>
                    <Button onClick={useEditTodo(refreshTodos, todo.title, todo.id)}>
                        <EditIcon></EditIcon>
                    </Button>
                </ButtonGroup>
            </ListItemButton>
        </ListItem>
    )
}