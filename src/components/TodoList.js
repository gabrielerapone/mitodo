import React, { Component } from "react";
// Components
import Todo from "./Todo";
import NoTodos from "./noTodos";

export default class TodoList extends Component {
  render() {
    // Conditionally renders todo list
    const { uid, todos } = this.props.data;

    const renderTodos = todos ? (
      Object.entries(todos).map(todo => (
        <Todo key={todo[0]} todoId={todo[0]} uid={uid} todo={todo[1]} />
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
