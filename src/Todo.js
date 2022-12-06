import { List, ListItem, ListItemText, ListItemAvatar} from '@mui/material';
import React, {useState } from 'react';
import './Todo.css';



function Todo(props) {
  const deleteTodo=(event)=>{
    event.preventDefault(); //will stop the refresh
    //console.log(data,todos);
    props.setTodos([...props.todos.filter(el => el !== props.test)]);
    //console.log(todos);
    

  }
  
  console.log(props.test);
  
  return (
    
    <List>
        <ListItem>
            <ListItemAvatar>
                
            </ListItemAvatar>
            <ListItemText primary={props.text} ></ListItemText>
        </ListItem>
        <li>{props.test}
        <button type='submit' onClick={deleteTodo}>Delete</button>
        </li>
    </List>
    
  )
}

export default Todo