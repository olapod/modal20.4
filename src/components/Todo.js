import React from 'react';
import style from './Todolist.css';

const Todo = props => {
    return(
        <ul>
            <li className={style.Todolist}>{props.text}</li>
        </ul>
    )
};
   
export default Todo;

