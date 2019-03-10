import React from 'react';


const Todolist = (props) => {
    return(
        <ul>
        {props.items.map((item) => 
          <li key={item.id}>{item.id} {item.text}</li>
        )}
        </ul>
      )
   
   
    } 

export default Todolist;