import React, { useContext } from "react";
import styled from "styled-components";
import { BoardContext } from "../../App";

const Letter = ({ letterPos, attemptVal }) => {
  const { board } = useContext(BoardContext);
  const letter = board[attemptVal][letterPos];
  return <Box>{letter}</Box>;
};

export default Letter;

const Box = styled.div`
  border: 2px solid var(--color-gray-500);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;

  &.active {
    border-color: var(--color-gray-300);
  }

  &.exists {
    background-color: var(--color-secondary);
  }

  &.correct {
    background-color: var(--color-primary);
  }
`;
