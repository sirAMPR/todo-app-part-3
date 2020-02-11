import React, { Component } from "react";
import "./index.css";
import todosList from "./todos.json";
import { Route, NavLink } from "react-router-dom";
import TodoList from "./TodoList.js";

class App extends Component {
  state = {
    todos: todosList
  };

  handleComplete = (event, todoId) => {
    // create copy
    const newTodos = this.state.todos.slice();
    // modify copy
    const newnewTodos = newTodos.map(todo => {
      // find todo to modify
      // change it's completed value to true
      if (todo.id === todoId) todo.completed = !todo.completed;
      return todo;
    });
    // overwrite original
    this.setState({ todos: newnewTodos });
  };

  handleDelete = (event, todoId) => {
    const newTodos = this.state.todos.slice();
    const newnewTodos = newTodos.filter(todo => todo.id !== todoId);
    this.setState({ todos: newnewTodos });
  };

  handleAddTodo = event => {
    if (event.key === "Enter") {
      // create new todo
      const newTodo = {
        userId: 1,
        id: Math.floor(Math.random() * 1000000),
        title: event.target.value,
        completed: false
      };

      // update component state with new todo
      // create copy of data
      const newTodos = this.state.todos.slice();
      // modify and overwrite original
      newTodos.push(newTodo);
      this.setState({ todos: newTodos });

      event.target.value = "";
    }
  };

  handleClearCompleted = event => {
    const newTodos = this.state.todos.slice();
    const newnewTodos = newTodos.filter(todo => !todo.completed);
    this.setState({ todos: newnewTodos });
  };

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            onKeyDown={this.handleAddTodo}
            autofocus
          />
        </header>
        <Route
          exact
          path="/"
          render={() => (
            <TodoList
              todos={this.state.todos}
              handleComplete={this.handleComplete}
              handleDelete={this.handleDelete}
            />
          )}
        />
        <Route
          path="/active"
          render={() => (
            <TodoList
              todos={this.state.todos.filter(todo => todo.completed === false)}
              handleComplete={this.handleComplete}
              handleDelete={this.handleDelete}
            />
          )}
        />
        <Route
          path="/completed"
          render={() => (
            <TodoList
              todos={this.state.todos.filter(todo => todo.completed === true)}
              handleComplete={this.handleComplete}
              handleDelete={this.handleDelete}
            />
          )}
        />
        <footer className="footer">
          {/* <!-- This should be `0 items left` by default --> */}
          <span className="todo-count">
            <strong>0</strong> item(s) left
          </span>
          <ul className="filters">
            <li>
              <NavLink exact to="/" activeClassName="selected">
                All
              </NavLink>
            </li>
            <li>
              <NavLink to="/active" activeClassName="selected">
                Active
              </NavLink>
            </li>
            <li>
              <NavLink to="/completed" activeClassName="selected">
                Completed
              </NavLink>
            </li>
          </ul>
          <button
            className="clear-completed"
            onClick={this.handleClearCompleted}
          >
            Clear completed
          </button>
        </footer>
      </section>
    );
  }
}

export default App;
