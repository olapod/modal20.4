import React from 'react';
import style from './Todoform.css';

class TodoForm extends React.Component {
    constructor(props) {
      super(props);
      this.addTask = this.addTask.bind(this);
    }
  
     
    addTask(event) {
        event.preventDefault();
        var inp = document.getElementById('todoInput');
        var val = inp.value;
        inp.value = '';
        this.props.addTask(val);
        
    }
  
    render() {
      return (
        <div>
            <div>
                <form onSubmit={this.addTask}>
                    <input id="todoInput" type="text" name="add-todo" placeholder="What needs to be done?"/>
                </form>
            </div>
            <button type="button" onClick={this.addTask} className={style.addbtn}>Add task</button>
        </div>
      );
    }
  }




export default TodoForm;