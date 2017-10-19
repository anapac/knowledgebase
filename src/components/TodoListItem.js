import React, { Component } from 'react';

class TodoListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
      desc: this.props.desc
    }
  }

  render() {
    return (
      <div className='todoItem'>
        <h2 className='todoItemName'>{this.state.name}</h2>
        <p className='todoItemDesc'>{this.state.desc}</p>
      </div>
    );
  }
} // class TodoListItem

export default TodoListItem;
