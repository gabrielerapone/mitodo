import React, { Component } from "react";
import styled from "styled-components";
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
      <Wrapper>
        <ListWrapper>{renderTodos}</ListWrapper>
      </Wrapper>
    );
  }
}
const Wrapper = styled.div`
  height: calc(100% - 100px);
`;

const ListWrapper = styled.ul`
  height: 100%;
`;
