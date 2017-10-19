import React, { Component } from 'react';

import './TodoList.css';
import TodoListItem from './TodoListItem.js';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          name: 'Karate - Dodo',
          desc: 'Провери кога са тренировките.'
        },
        {
          name: 'React.js',
          desc: 'Work on React'
        },
        {
          name: 'Work on JS',
          desc: 'JS Ninja + You don\'t know JS'
        }
      ]
    } // this.state

    this.listTodos.bind(this);
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
          { todos.map((todo, idx) => this.listTodos(todo, idx)) }
        </fieldset>
      </div>
    );
  }
} // class TodoList

export default TodoList;
