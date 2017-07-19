import React from 'react';
import ReactDOM from 'react-dom';

import Todo from './Todo';

class TodoList extends React.Component{
  render() {
    return (
      <ul>
        {this.props.task.map((item) => <Todo key={item.taskText} text={item.taskText} completed={item.completed} />)}
      </ul>
    )
  }
}

export default TodoList;
