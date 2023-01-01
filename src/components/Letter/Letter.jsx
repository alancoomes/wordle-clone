import React, { useContext } from "react";
import styled from "styled-components";
import { BoardContext } from "../../App";
import PropTypes from "prop-types";

const Letter = ({ letterPos, attemptVal }) => {
  const { board, correctWord, currAttempt } = useContext(BoardContext);
  const letter = board[attemptVal][letterPos];

  const correctWordArr = correctWord.toUpperCase().split("");
  const correct = correctWordArr[letterPos] === letter;
  const exists = !correct && correctWordArr.includes(letter);
  const finalGuess =
    currAttempt.attempt === 5 && currAttempt.letterPosition === 5;

  const letterState =
    (finalGuess || currAttempt.attempt > attemptVal) &&
    (correct ? "correct" : exists ? "exists" : "wrong");
  return (
    <Box
      id={letterState ? letterState : undefined}
      className={!letterState && letter !== "" && "active"}
    >
      {letter}
    </Box>
  );
};

export default Letter;

Letter.propTypes = {
  letterPos: PropTypes.number,
  attemptVal: PropTypes.number,
};

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
