import ListItemButton from "@mui/material/ListItemButton";
import ListItem from "@mui/material/ListItem";
import * as React from "react";
import styles from '../App.module.css'
import {Link} from 'react-router-dom'


export const TodoItem = ({labelId, todo}) => {
    return (
        <ListItem
            key={todo}
            disablePadding
            className={styles.todoCard + ' ' + (todo.isShown ? styles.active : styles.hidden)}
        >
            <Link to={`task/${todo.id}`}>
                <ListItemButton role={undefined}  className={styles.todoCardTextWrapper} dense>
                    <p id={labelId} className={styles.todoCardText}>{todo.title}</p>
                </ListItemButton>
            </Link>

        </ListItem>
    )
}