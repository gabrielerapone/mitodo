import React from "react";
import styled from "styled-components";
import RelaxImg from "../assets/relax.svg";

export default () => {
  return (
    <Wrapper>
      <h1>Nothing to do :)</h1>
      <Relax src={RelaxImg} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Avenir-Roman;
`;

const Relax = styled.img`
  width: 20%;
  padding: 50px;
`;
