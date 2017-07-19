import React from 'react';
import ReactDOM from 'react-dom';

import TodoApp from './components/TodoApp';

// let dummyData = [
//   {taskText: 'Wash dishes', completed: true},
//   {taskText: 'go shopping', completed: false},
//   {taskText: 'profess my love to ricky', completed: false},
//   {taskText: 'attempt to kill myself', completed: false},
//
// ];

// class InputLine extends React.Component{
//   render() {
//     return (
//       <div>
//         <form>
//           <input type='text' placeholder='task' />
//           <input type='submit' value='Add todo'/>
//         </form>
//       </div>
//     )
//   }
// }


// class Todo extends React.Component{
//   render() {
//     return (
//       this.props.completed ? <li><button value="X">X</button><strike>{this.props.text}</strike></li> :
//                              <li><button value="X">X</button>{this.props.text}</li>
//     )
//   }
// }

// class TodoList extends React.Component{
//   render() {
//     return (
//       <ul>
//         {this.props.task.map((item) => <Todo key={item.taskText} text={item.taskText} completed={item.completed} />)}
//       </ul>
//     )
//   }
// }

// class TodoApp extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       todos: []
//     }
//   }
//
//   componentDidMount(){
//     this.setState({todos: dummyData})
//   }
//
//   render() {
//     return (
//       <div>
//         <InputLine />
//         <TodoList task={this.state.todos} />
//       </div>
//     )
//   }
// }

ReactDOM.render(<TodoApp />, document.getElementById('root'));
