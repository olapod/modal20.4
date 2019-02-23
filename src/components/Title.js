import App from '../../containers/App.js';

class Title extends React.Component {
    render() {
        return <div className={'title'}>
          <h1>ToDoList</h1>
          <p>Number of Tasks: <App>{data.length}</App></p>
        </div>   
      }
    }

export default Title;

