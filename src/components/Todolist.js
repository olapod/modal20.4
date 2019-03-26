import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  constructor(props){
    super(props);
} 
  render () {
      return this.props.items.map(item => {
          return (
              <Todo
                key={item.id}
                remove={this.props.remove}
                text={item.text}
                id={item.id}
              />
          )
      });
    }
  }

export default TodoList;