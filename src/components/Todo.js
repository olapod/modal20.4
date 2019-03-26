import React from 'react';

// class Todo extends React.Component {
//     constructor(props){
//         super(props);
//         this.onClick = this.onClick.bind(this);
//     }       

//     render () {
//         return(
//             <li onClick={this.props.remove}>{props.text}</li>
//         )
//     };

//     remove () {
//         this.props.remove(props.id);
//     }
// }

class Todo extends React.Component {
    constructor(props) {
      super(props);
      this.onClickRemove = this.onClickRemove.bind(this);
      
    }
    onClickRemove() {
      var id = this.props.id;
      this.props.remove(id);
    }
    
    render () {
      
      return(
        <li onClick={this.onClickRemove}>{props.text}</li>   
      );
    }
  }

export default Todo;

