import React, { Component } from "react";
import styled from "styled-components";
// Utils
import { removeTodo } from "../utils/firebase";
// Assets
import doneIcon from "../assets/doneIcon.svg";

export default class Todo extends Component {
  render() {
    const { uid, todo, todoId } = this.props;
    return (
      <TodoBox>
        <h1>{todo.title}</h1>
        <DoneIcon src={doneIcon} onClick={() => removeTodo(uid, todoId)} />
      </TodoBox>
    );
  }
}

const TodoBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DoneIcon = styled.img`
  width: 30px;
  height: 30px;
`;
