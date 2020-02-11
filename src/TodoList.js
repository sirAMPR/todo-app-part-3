import React, { Component } from "react";
import TodoItem from "./TodoItem.js";

class TodoList extends Component {
  render() {
    return (
      <section className="main">
        <ul className="todo-list">
          {this.props.todos.map(todo => (
            <TodoItem
              title={todo.title}
              completed={todo.completed}
              id={todo.id}
              handleComplete={this.props.handleComplete}
              handleDelete={this.props.handleDelete}
            />
          ))}
        </ul>
      </section>
    );
  }
}

export default TodoList;
