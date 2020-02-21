import React, { Component } from "react";
import TodoItem from "./TodoItem.js";
import { connect } from "react-redux";
import { deleteTodo, toggleTodo } from "./actions";

class TodoList extends Component {
  render() {
    return (
      <section className="main">
        <ul className="todo-list">
          {this.props.todos.map(todo => (
            <TodoItem
              title={todo.title}
              completed={todo.completed}
              handleComplete={event => this.props.toggleTodo(todo.id)}
              handleDelete={event => this.props.deleteTodo(todo.id)}
            />
          ))}
        </ul>
      </section>
    );
  }
}

// this.props.deleteTodo
const mapDispatchToProps = {
  deleteTodo,
  toggleTodo
};
export default connect(null, mapDispatchToProps)(TodoList);
