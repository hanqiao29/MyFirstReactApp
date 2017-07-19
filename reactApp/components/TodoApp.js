import React from 'react';
import ReactDOM from 'react-dom';

import InputLine from './InputLine';
import TodoList from './TodoList';
import Todo from './Todo';

let dummyData = [
  {taskText: 'Wash dishes', completed: true},
  {taskText: 'go shopping', completed: false},
  {taskText: 'profess my love to ricky', completed: false},
  {taskText: 'attempt to kill myself', completed: false},

];

class TodoApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todos: []
    }
  }

  componentDidMount(){
    this.setState({todos: dummyData})
  }

  render() {
    return (
      <div>
        <InputLine />
        <TodoList task={this.state.todos} />
      </div>
    )
  }
}

export default TodoApp;
