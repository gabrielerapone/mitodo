import React, { Component } from "react";
import styled from "styled-components";
// Utils
import fetchData from "../utils/fetchData";
// import { checkTodos } from "../utils/firebase";
// Components
import TodoList from "./TodoList";
import Spinner from "../utils/Spinner";
import Form from "./Form";

export default class Main extends Component {
  state = {
    data: null
  };

  // Sets state with user's data
  updateState = data => this.setState({ data });

  render() {
    const uid = this.props.user.uid;
    // Fetch data
    fetchData(`https://mitodo-c753a.firebaseio.com/users/${uid}.json`)
      .then(data => this.updateState(data))
      .catch(err => console.log(err));

    // Renders loading spinner while waits for todo list
    const renderList =
      this.state.data === null ? (
        <Spinner />
      ) : (
        <TodoList data={this.state.data} />
      );

    return (
      <Wrapper>
        <h1>MITODO</h1>
        {renderList}
        <Form data={this.state.data} />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  padding: 20px;
`;
