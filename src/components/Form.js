import React, { Component } from "react";
import styled from "styled-components";
// Utils
import { addTodo } from "../utils/firebase";
// Assets
import addTodoIcon from "../assets/addTodoIcon.svg";

export default class Form extends Component {
  state = {
    inputValue: ""
  };

  handleChange = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  handleClick = e => {
    const uid = this.props.data.uid;
    const todo = this.state.inputValue;

    this.setState({
      inputValue: ""
    });
    addTodo(uid, todo, this.props.totalTodos);
  };

  render() {
    return (
      <FormWrapper>
        <TodoInput
          placeholder="Something to do"
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
        <AddButton onClick={this.handleClick}>
          <AddIcon src={addTodoIcon} />
        </AddButton>
      </FormWrapper>
    );
  }
}

const FormWrapper = styled.div`
  width: 100vw;
  position: fixed;
  transform: translate(0, 0);
  bottom: 0;
  left: 0;
  background-color: white;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
`;

const AddIcon = styled.img`
  height: 20px;
`;

const TodoInput = styled.input`
  width: 90vw;
  height: 48px;
  border: none;
  padding: 0 20px;
  font-size: 18px;
  ::placeholder {
    font-size: 18px;
  }
`;

const AddButton = styled.button`
  width: 10vw;
  height: 48px;
  background-color: yellow;
  border: none;
  font-size: 18px;
`;
