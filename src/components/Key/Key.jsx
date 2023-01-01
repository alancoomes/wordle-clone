import React, { useContext } from "react";
import styled from "styled-components";
import { BoardContext } from "../../App";
import PropTypes from "prop-types";

const Key = ({ keyVal, bigKey }) => {
  const { onSelectLetter, onEnter, onDelete } = useContext(BoardContext);
  const handleClick = () => {
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

Key.propTypes = {
  keyVal: PropTypes.string,
  bigKey: PropTypes.bool,
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

  &#exists {
    background-color: var(--color-secondary);
  }

  &#correct {
    background-color: var(--color-primary);
  }

  &#wrong {
    background-color: var(--color-gray-500);
    border-color: var(--color-gray-500);
  }
`;

export default Key;
