import React, { Component } from "react";
import "./index.css";
import todosList from "./todos.json";
import { Route, NavLink } from "react-router-dom";
import TodoList from "./TodoList.js";
import { connect } from "react-redux";

import {
  toggleTodo,
  addTodo,
  deleteTodo,
  clearCompletedTodos
} from "./actions";

class App extends Component {
  handleComplete = (event, todoId) => {
    this.props.toggleTodo(todoId);
  };

  handleDelete = (event, todoId) => {
    this.props.deleteTodo(todoId);
  };

  handleAddTodo = event => {
    if (event.key === "Enter") {
      this.props.addTodo(event.target.value);
      event.target.value = "";
    }
  };

  handleClearCompleted = event => {
    this.props.clearCompletedTodos();
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
              todos={this.props.todos}
              handleComplete={this.handleComplete}
              handleDelete={this.handleDelete}
            />
          )}
        />
        <Route
          path="/active"
          render={() => (
            <TodoList
              todos={this.props.todos.filter(todo => todo.completed === false)}
              handleComplete={this.handleComplete}
              handleDelete={this.handleDelete}
            />
          )}
        />
        <Route
          path="/completed"
          render={() => (
            <TodoList
              todos={this.props.todos.filter(todo => todo.completed === true)}
              handleComplete={this.handleComplete}
              handleDelete={this.handleDelete}
            />
          )}
        />
        <footer className="footer">
          {/* <!-- This should be `0 items left` by default --> */}
          <span className="todo-count">
            <strong>
              {this.props.todos.filter(todo => todo.completed === false).length}
            </strong>{" "}
            item(s) left
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

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = {
  addTodo,
  clearCompletedTodos,
  toggleTodo,
  deleteTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
