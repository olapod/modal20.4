import React from 'react';

class Todo extends React.Component {
    constructor(props){
        super(props);
    }       

    render () {
        return(
            <li onClick={this.remove.bind(this)}>{props.text}</li>
        )
    };

    remove () {
        this.props.remove(this.props.id);
    }
}

export default Todo;

