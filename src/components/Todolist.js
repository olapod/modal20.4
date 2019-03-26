import React from 'react';
import Todo from './Todo';

// const TodoList = props =>(
    
//   props.items.map(item =>
//     <Todo key={item.id} id={item.id} remove={this.props.remove} text={item.text} />
//   )
// );

class TodoList extends React.Component {
  render () {
    var items = this.props.items.map((item) => {
      return (
        <Todo key={item.id} id={item.id} remove={this.props.remove} text={item.text}
         />
      );
    });
    return (
      <ul> {items} </ul>
    );
  }
}

export default TodoList;