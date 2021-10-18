import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <div>
        <TodoListTemplate form = {<Form/>} >
        <div>TodoList</div>
        </TodoListTemplate>
      </div> 
    );
  }
}

export default App;