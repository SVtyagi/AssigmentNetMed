import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import FilterListIcon from '@material-ui/icons/FilterList';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
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
}));
let sports = [
          { id : 1, name : "cricket"},
          { id : 2, name : "football"},
          { id : 3, name : "golf"},
          { id : 4, name : "table-tennis"},
          { id : 5, name : "badminton"},
          { id : 6, name : "pool"},
          { id : 7, name : "baseball"},
          { id : 8, name : "basketball"}
    ];
export default function SportGames() {
  const classes = useStyles();
  const [input, setInput] = useState('')

 const handleChange = (e)=>{
    setInput(e.target.value)
  }

  return (
      <div> 
       <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Filter input"
        inputProps={{ 'aria-label': 'Filter input' }}
        defaultValue={input}
        onChange={handleChange}
      />
      <Divider className={classes.divider} orientation="vertical" />
        <FilterListIcon />
    </Paper>
    <ul >
    
    {
        sports.filter((data)=> data.name.includes(input)).map((value)=>{
            return (
                <li key={value.id}>{value.name}</li>
            )
        })
    }
    </ul>
    </div>
  );
}
