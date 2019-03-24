import React from 'react';
import Todo from './Todo';
import style from './Todolist.css';

// const TodoList = props =>(
//   props.items.map(item =>
//   <li className={style.Todolist} key={item.id} onClick = {()=>props.remove(item.id)}>{item.text}</li>
//   )
// );

const TodoList = props =>(
  
    props.items.map(item =>
      
    <Todo key={item.id} text={item.text} onClick = {()=>props.remove(item.id)} />
    )
)
    
  
;

export default TodoList;