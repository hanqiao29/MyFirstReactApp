import React from 'react';
import ReactDOM from 'react-dom';

class InputLine extends React.Component{
  render() {
    return (
      <div>
        <form>
          <input type='text' placeholder='task' />
          <input type='submit' value='Add todo'/>
        </form>
      </div>
    )
  }
}

export default InputLine;
