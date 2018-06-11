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
  width: 90vw;
  position: fixed;
  transform: translate(-50%, 0);
  bottom: 35px;
  left: 50%;
  background-color: white;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
`;

const AddIcon = styled.img`
  height: 20px;
`;

const TodoInput = styled.input`
  width: 90vw;
  height: 48px;
  border: none;
  font-size: 18px;
  padding: 0 20px;
  ::placeholder {
    font-size: 16px;
    padding: 0 20px;
  }
`;

const AddButton = styled.button`
  width: 10vw;
  background-color: red;
  border: none;
  font-size: 18px;
`;
