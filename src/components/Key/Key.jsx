import React, { useContext } from "react";
import styled from "styled-components";
import { BoardContext } from "../../App";

const Key = ({ value, bigKey }) => {
  const { board, setBoard, currAttempt, setCurrAttempt } =
    useContext(BoardContext);
  const handleClick = (e) => {
    debugger;
    const { attempt, letterPosition } = currAttempt;
    const newBoard = [...board];
    newBoard[attempt][letterPosition] = e.target.value;
    setCurrAttempt({ ...currAttempt, letterPosition: letterPosition + 1 });
    setBoard(newBoard);
  };

  return (
    <KeyButton id={bigKey && "big"} onClick={handleClick} value={value}>
      {value}
    </KeyButton>
  );
};

const KeyButton = styled.button`
  font-weight: 900;
  border: none;
  border-radius: 4px;
  color: white;
  background-color: var(--color-gray-300);
  margin: 0;
  padding: 0;
  height: 58px;
  flex: 1;

  &#big {
    flex: 1.5;
  }

  &.exists {
    background-color: var(--color-secondary);
  }

  &.correct {
    background-color: var(--color-primary);
  }

  &.wrong {
    background-color: var(--color-gray-500);
    pointer-events: none;
  }
`;

export default Key;
