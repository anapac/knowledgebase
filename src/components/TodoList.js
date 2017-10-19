import React, { Component } from 'react';

import './TodoList.css';
import TodoListItem from './TodoListItem.js';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    } // this.state

    this.listTodos.bind(this);
  }

  componentDidMount() {
    fetch('/API/todos').then(todos => {
      this.setState({ todos });
    });
  }

  listTodos(todo, idx) {
    return (
      <TodoListItem key={idx} name={todo.name} desc={todo.desc} />
    );
  }

  render() {
    const todos = this.state.todos || [];

    return (
      <div id='todolist'>
        <fieldset>
          { todos.length
            ? todos.map((todo, idx) => this.listTodos(todo, idx))
            : ''
          }
        </fieldset>
      </div>
    );
  }
} // class TodoList

export default TodoList;
