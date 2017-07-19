import React from 'react';
import ReactDOM from 'react-dom';

class Todo extends React.Component{
  render() {
    return (
      this.props.completed ? <li><button value="X">X</button><strike>{this.props.text}</strike></li> :
                             <li><button value="X">X</button>{this.props.text}</li>
    )
  }
}

export default Todo;
