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
        <TodoTitle>
          <p>{todo.title}</p>
        </TodoTitle>
        <TodoDate>
          <Date>{todo.date}</Date>
        </TodoDate>
        <DoneIcon src={doneIcon} onClick={() => removeTodo(uid, todoId)} />
      </TodoBox>
    );
  }
}

const TodoBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;
const TodoTitle = styled.div`
  width: 30%;
  word-wrap: break-word;
  font-family: Avenir-Medium;
`;
const TodoDate = styled.div`
  width: 30%;
`;

const DoneIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const Date = styled.span`
  color: grey;
  font-size: 14px;
`;
