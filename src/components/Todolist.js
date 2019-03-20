import React from 'react';
import style from './Todolist.css';

const TodoList = props =>(
  props.items.map(item =>
  <li className={style.Todolist} key={item.id} onClick = {()=>props.remove(item.id)}>{item.text}</li>
  )
);

export default TodoList;