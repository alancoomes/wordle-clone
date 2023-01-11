import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { BoardContext } from "../../App";
import PropTypes from "prop-types";

const Letter = ({ letterPos, attemptVal }) => {
  const {
    board,
    correctWord,
    currAttempt,
    setDisabledLetters,
    setExistsLetters,
    setCorrectLetters,
    isFinalGuess,
  } = useContext(BoardContext);
  const letter = board[attemptVal][letterPos];
  // const guess = board[attemptVal];
  // console.log(guess);

  const correctWordArr = correctWord.toUpperCase().split("");
  const correct = correctWordArr[letterPos] === letter;
  const exists = !correct && correctWordArr.includes(letter);

  const letterState =
    (isFinalGuess || currAttempt.attempt > attemptVal) &&
    (correct
      ? "correct"
      : exists
      ? "exists"
      : letter !== ""
      ? "wrong"
      : undefined);

  useEffect(() => {
    if (letter !== "" && !correct && !exists) {
      setDisabledLetters((prev) => [...prev, letter]);
    } else if (correct) {
      setCorrectLetters((prev) => [...prev, letter]);
    } else if (exists) {
      setExistsLetters((prev) => [...prev, letter]);
    }
  }, [currAttempt.attempt]);

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
  display: inline-flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: 2rem;

  @keyframes grow-and-shrink {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes flip-letter {
    0% {
      transform: scale(1, 1);
      background-color: var(--color-gray-900);
    }
    50% {
      transform: scale(1, 0);
      background-color: var(--color-gray-900);
    }
    100% {
      transform: scale(1, 1);
    }
  }

  &.active {
    border-color: var(--color-gray-300);
    animation: grow-and-shrink 50ms;
  }

  &#exists {
    background-color: var(--color-secondary);
    animation: flip-letter 300ms linear;
  }

  &#correct {
    background-color: var(--color-primary);
    animation: flip-letter 300ms linear;
  }

  &#wrong {
    background-color: var(--color-gray-500);
    border-color: var(--color-gray-500);
    animation: flip-letter 300ms linear;
  }
`;
