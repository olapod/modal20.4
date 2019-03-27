import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li onClick={this.props.customClickEvent}>{this.props.text}</li>
    )
  };
}

export default Todo;




