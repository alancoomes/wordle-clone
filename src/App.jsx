import { useState, createContext, useEffect } from "react";
import styled from "styled-components";
import GameBoard from "./components/GameBoard/GameBoard";
import Header from "./components/Header/Header";
import { boardDefault, generateWordSet } from "./constants";

export const BoardContext = createContext(boardDefault);

function App() {
  const [correctWord, setCorrectWord] = useState("");
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({
    attempt: 0,
    letterPosition: 0,
  });
  const [wordSet, setWordSet] = useState(new Set());
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [existsLetters, setExistsLetters] = useState([]);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [isFinalGuess, setIsFinalGuess] = useState(false);

  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet);

      const wordArr = Array.from(words.wordSet);
      let randIndex = Math.floor(Math.random() * wordArr.length);
      let newWord = wordArr[randIndex];
      setCorrectWord(newWord);
    });
  }, []);

  const onSelectLetter = (keyVal) => {
    if (currAttempt.letterPosition > 4) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPosition] = keyVal;
    setBoard(newBoard);
    setCurrAttempt({
      ...currAttempt,
      letterPosition: currAttempt.letterPosition + 1,
    });
  };

  const onEnter = () => {
    //Check is guess has 5 letters, TODO: add alert if not
    if (currAttempt.letterPosition !== 5) {
      return;
    }

    if (currAttempt.attempt === 5 && currAttempt.letterPosition === 5) {
      setIsFinalGuess(true);
    }

    let guess = board[currAttempt.attempt];
    //Check if guess is acceptable based on word bank, TODO: add shake animation if failed
    if (!wordSet.has(guess.join("").toLowerCase())) {
      return;
    }
    //Check if guess is correct, TODO:
    if (guess.join("").toLowerCase() === correctWord) {
      setCurrAttempt({ attempt: 5, letterposition: 4 });
      return;
    }
    if (currAttempt.attempt !== 5) {
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPosition: 0 });
    }
  };

  const onDelete = () => {
    if (currAttempt.letterPosition === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPosition - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({
      ...currAttempt,
      letterPosition: currAttempt.letterPosition - 1,
    });
  };

  return (
    <AppWrapper>
      <Header></Header>
      <BoardContext.Provider
        value={{
          board,
          setBoard,
          currAttempt,
          setCurrAttempt,
          onSelectLetter,
          onDelete,
          onEnter,
          correctWord,
          setDisabledLetters,
          disabledLetters,
          existsLetters,
          setExistsLetters,
          correctLetters,
          setCorrectLetters,
          isFinalGuess,
        }}
      >
        <GameBoard />
      </BoardContext.Provider>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  height: 100%;
`;
