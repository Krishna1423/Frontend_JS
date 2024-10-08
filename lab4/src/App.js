import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: '',
    };
  }
  
  handleInputChange = (event) => {
    this.setState({newTodo: event.target.value});
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.newTodo.trim() === '') return;

    this.setState((prevState) => ({
      todos: [...prevState.todos, prevState.newTodo],
      newTodo: '',
    }))
  }

  removeTodo = (index) => {
    const updatedTodos = [...this.state.todos];
    updatedTodos.splice(index, 1);
    this.setState({ todos:updatedTodos });
  }

  render() {

    return (
    <div className="App">
      <h1> Todo List </h1>
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add a new todo"
          value={this.state.newTodo}
          onChange={this.handleInputChange}
          />
          <button type="submit">Add</button>
      </form>
      <u1>
        {this.state.todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => this.removeTodo(index)}> Remove </button>
          </li>
        ))}
      </u1>
    </div>
    
    );
 }
}

export default App;
