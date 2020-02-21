import React, { Component } from "react";
import "./index.css";
import { Route, NavLink } from "react-router-dom";
import TodoList from "./TodoList.js";
import { connect } from "react-redux";
import { addTodo, clearCompletedTodos } from "./actions";

class App extends Component {
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
            />
          )}
        />
        <Route
          path="/active"
          render={() => (
            <TodoList
              todos={this.props.todos.filter(todo => todo.completed === false)}
              handleComplete={this.handleComplete}
            />
          )}
        />
        <Route
          path="/completed"
          render={() => (
            <TodoList
              todos={this.props.todos.filter(todo => todo.completed === true)}
              handleComplete={this.handleComplete}
            />
          )}
        />
        <footer className="footer">
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
  clearCompletedTodos
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
