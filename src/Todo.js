import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Fab from '@material-ui/core/Fab';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import AddIcon from '@material-ui/icons/Add';
import CancelIcon from '@material-ui/icons/Cancel';

import { addTask, deleteTask } from './action'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    rootPaper: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
        marginBottom: '3rem'
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
    done: {
        textDecoration: 'line-through',
        "&:hover":{
            textDecoration: 'line-through',
        }
    },
    task: {

    }
}));

export default function ToDo() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { todoList } = useSelector(
        state => state.reducer
    );

    const [input, setInput] = useState('')

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const addTaskToList = () => {
        var mainArray = todoList

        if (input.length > 0) {
            var taskLength = mainArray.length
            var arr = [...todoList, ...[{
                id: ++taskLength,
                task: input,
                isChecked: false
            }]]
            dispatch(addTask(arr))
            setInput('')
        }
    }

    const deleteTaskFromList = (value) => {
        var mainArray = todoList
        var indexValue = mainArray.map((e) => e.task).indexOf(value.task)
        mainArray.splice(indexValue, 1)
        dispatch(deleteTask(mainArray))
    }


    const markAsDone = (value) => {
        var mainArray = todoList
        var indexValue = mainArray.map((e) => e.task).indexOf(value.task)

        mainArray[indexValue].isChecked = !value.isChecked
        dispatch(addTask(todoList))
    }

return (
    <div>
        <h3>Task List</h3>
        <Paper component="form" className={classes.rootPaper}>
            <InputBase
                className={classes.input}
                placeholder="Add Task"
                inputProps={{ 'aria-label': 'Add Task' }}
                defaultValue={input}
                onChange={handleChange}
            />
            <Fab color="primary" aria-label="add" size="small" onClick={addTaskToList}>
                <AddIcon />
            </Fab>
        </Paper>
        {todoList.length > 0 && <List dense className={classes.root}>
            {todoList.map((value) => {
                const labelId = `checkbox-list-secondary-label-${value.id}`;
                return (
                    <ListItem key={value.id} button className={(value.isChecked && classes.done)}>
                        <ListItemAvatar>
                            <Checkbox
                                edge="end"
                                onChange={()=>markAsDone(value)}
                                checked={value.isChecked}
                                inputProps={{ 'aria-labelledby': labelId }}
                            />
                        </ListItemAvatar>
                        <ListItemText id={labelId}  primary={value.task} />
                        <ListItemSecondaryAction>
                            <CancelIcon onClick={() => deleteTaskFromList(value)} />
                        </ListItemSecondaryAction>
                    </ListItem>
                );
            })}
        </List>}
    </div>
);
}
