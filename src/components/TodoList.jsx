import React, { Component } from 'react';
import Item from './Item';

class TodoList extends Component {

  render() {  
    return(           
      <div className='list'>
          <h3>Todo List</h3>
          {this.props.todos.map(todo => (
              <Item
                  key = {todo.id}
                  todo = {todo}
                  delete = {this.props.delete} 
                  edit = {this.props.edit}
                  complete = {this.props.complete}
                  />
          ))}
      </div>  
    );
  }}

export default TodoList;
    