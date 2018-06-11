import React, { Component } from "react";
import styled from "styled-components";
import LoadingSvg from "../assets/Loading.svg";

export default class Spinner extends Component {
  render() {
    return (
      <Wrapper>
        <Loading src={LoadingSvg} />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 100px);
`;

const Loading = styled.img`
  transform: translate(43%, 0);
`;
