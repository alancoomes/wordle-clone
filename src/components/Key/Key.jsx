import React, { useContext } from "react";
import styled from "styled-components";
import { BoardContext } from "../../App";

const Key = ({ keyVal, bigKey }) => {
  const { onSelectLetter, onEnter, onDelete } = useContext(BoardContext);
  const handleClick = (e) => {
    if (keyVal === "Enter") {
      onEnter();
    } else if (keyVal === "Delete") {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };

  return (
    <KeyButton id={bigKey && "big"} onClick={handleClick}>
      {keyVal}
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
