import { Button, FormControl, Input, InputLabel } from '@mui/material';
import React, {useState } from 'react';
import './App.css';
import Todo from './Todo';

function App() {
  const [todos,setTodos]=useState(['']);
   const [input,setINPUT]=useState('');    
   const [data,setData]=useState('');         




  const addTodo=(event)=>{
    //this will fire off when we click the button
    event.preventDefault(); //will stop the refresh
   
    setTodos([...todos,input]);
    
    
    

    setINPUT('');//clear up the input after clicking add todo button
    
  }
 
  const deleteTodo=(event)=>{
    event.preventDefault(); //will stop the refresh
    //console.log(data,todos);
    setTodos([...todos.filter(el => el !== data)]);
    setData('');
    //console.log(todos);
    

  }



  return (
    <div className="App">
      <h1> TODO APP </h1>
      <form>
      
      <FormControl>
        <InputLabel>Write a Todo</InputLabel>
        <Input value={input} onChange={event => setINPUT(event.target.value)}/>

        <Input value={data} onChange={event =>setData(event.target.value)}/>

      </FormControl>

      <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">Add Todo</Button>

      <Button  type="submit" onClick={deleteTodo} variant="contained" color="primary">delete Todo</Button>
      {/*<button type="submit" onClick={addTodo}>Add Todo</button>*/}
      </form>
      <ul>
        {todos.map((todo,index) =>(
          <Todo setTodos={setTodos} test={todo} todos={todos} index={index + 1}/>
          //<li>{todo}</li>
        ))}
        
      </ul>
      
    </div>
  );
}

export default App;