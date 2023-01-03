import React, { useContext } from "react";
import styled from "styled-components";
import { BoardContext } from "../../App";
import PropTypes from "prop-types";
import Icon from "../Icon/Icon";

const Key = ({ keyVal, bigKey, disabled, exists, correct }) => {
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
    <KeyButton
      id={bigKey && "big"}
      className={
        disabled
          ? "disabled"
          : correct
          ? "correct"
          : exists
          ? "exists"
          : undefined
      }
      onClick={handleClick}
    >
      {keyVal == "Delete" ? (
        <IconWrapper>
          <Icon id="delete" strokeWidth={2} />{" "}
        </IconWrapper>
      ) : (
        keyVal
      )}
    </KeyButton>
  );
};

Key.propTypes = {
  keyVal: PropTypes.string,
  bigKey: PropTypes.bool,
  disabled: PropTypes.bool,
  exists: PropTypes.bool,
  correct: PropTypes.bool,
};

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const KeyButton = styled.button`
  font-weight: bold;
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

  &.disabled {
    background-color: var(--color-gray-500);
    border-color: var(--color-gray-500);
  }

  & > svg {
    display: inline;
  }
`;

export default Key;
