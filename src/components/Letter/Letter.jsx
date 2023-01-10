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
