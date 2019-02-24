import React from 'react';
import App from "../../containers/App";


// class Title extends React.Component {
//     render() {
//         return <div className={'title'}>
//           <h1>ToDoList</h1>
//           <p>Number of Task: {App.data.length}</p>
//         </div>   
//       }
//     }

const Title = props =>
    <div>
        <h1>TO DO LIST</h1>
        <p>Number of Tasks: {App.data.length}</p>
    </div>;

    export default Title;
