import React, { Component } from "react";
// Components
import Todo from "./Todo";
import NoTodos from "./noTodos";

export default class TodoList extends Component {
  render() {
    // Conditionally renders todo list
    const renderTodos = this.props.data.todos ? (
      this.props.data.todos.map(todo => (
        <Todo uid={this.props.data.uid} todo={todo} key={todo.id} />
      ))
    ) : (
      <NoTodos />
    );
    return (
      <div>
        <ul>{renderTodos}</ul>
      </div>
    );
  }
}
