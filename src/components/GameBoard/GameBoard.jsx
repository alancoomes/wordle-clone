import { useEffect, useState } from "react";
import styled from "styled-components";
import GuessGrid from "../GuessGrid/GuessGrid";
import Keyboard from "../Keyboard/Keyboard";

const GameBoard = ({ word }) => {
  const [guess, setGuess] = useState("");
  const [letterObj, setLetter] = useState({ currentPosition: 0, letter: "" });

  const handleClick = (e) => {
    if (e.target.value === "Enter") {
      submitGuess();
      return;
    }
    if (e.target.value === "Delete") {
      deleteLetter();
      return;
    }
    if (e.target.value === letterObj.letter) {
      setLetter({ ...letterObj, sameLetterCnt: letterObj.sameLetterCnt + 1 });
    }
    setLetter({ ...letterObj, letter: e.target.value });
  };

  return (
    <Main>
      <BoardWrapper>
        <GuessGrid letterObj={letterObj} />
      </BoardWrapper>

      <Keyboard />
    </Main>
  );
};

const BoardWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.main`
  height: calc(100% - var(--header-height));
  width: 100%;
  max-width: 500px;
  background-color: var(--color-gray-900);
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export default GameBoard;
