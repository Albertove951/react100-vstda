import React, { Component } from 'react';
import TodoList from './components/TodoList'
import AddItem from './components/AddItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []

    }
    this.delete = this.delete.bind(this);
    this.addItem = this.addItem.bind(this);
    this.complete = this.complete.bind(this);
  }

  // need to create a function that will make the textarea blank when new item is added

  addItem(event) {
    let todos = this.state.todos;
    todos.push(event);
    this.setState(todos);
    // console.log(event);
  }

  delete(id) {
    let del = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos: del });
    // console.log(this.props.todos)
  }

  complete(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.complete = !todo.complete
        }
        return todo;
      })
    });
  }

  render() {
    return (
      <div className='container'>
        <h1 className='header'>VSTDA</h1>
        <hr />
        <AddItem addItem={this.addItem} />
        <TodoList
          todos={this.state.todos}
          delete={this.delete}
          edit={this.edit}
          complete={this.complete}
        />
      </div>
    );
  }
}

export default App;
