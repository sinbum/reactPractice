import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {
  id = 3 // 이미 0,1,2 가 존재하므로 3으로 설정
  state = {
    //Form 컴포넌트의 input 필드에 입력하는 값을 저장할  상태변수
    input: '',
    todos: [
      { id: 0, text: '리액트 소개', checked: false },
      { id: 1, text: '리액트 구조', checked: true },
      { id: 2, text: '리액트 사용', checked: false }
    ]
  }
  //event handler method 선언
  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '', // input 초기화
      // concat 을 사용하여 배열에 추가
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }
  handleKeyPress = (e) => {
    // 눌려진 키가 Enter 이면 handleCreate 호출
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  }


    render() {
      const { input } = this.state;
      const { handleChange, handleCreate, handleKeyPress } = this;
      return (
        <div>
          <TodoListTemplate form={<Form
            todo={input}
            myChange={handleChange}
            myCreate={handleCreate}
            myKeyPress={handleKeyPress}


          />} >
            <TodoItemList />
          </TodoListTemplate>
        </div>
      );
    }
  }

export default App;