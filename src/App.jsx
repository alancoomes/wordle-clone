import { useState, createContext, useEffect } from "react";
import styled from "styled-components";
import Alert from "./components/Alert/Alert";
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
  const [gameOver, setGameOver] = useState(false);
  const [isAlert, setIsAlert] = useState(false);
  const [alert, setAlert] = useState({ text: "", duration: 0 });

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
    console.log(correctWord);
    //Check is guess has 5 letters, TODO: add alert if not
    if (currAttempt.letterPosition !== 5) {
      const newAlert = { text: "Not Enough Letters", duration: 500 };
      setIsAlert(true);
      setAlert(newAlert);
      return;
    }
    //Check if attempt is last attempt, TODO: fix functionality
    if (currAttempt.attempt === 5) return;

    let guess = board[currAttempt.attempt];
    //Check if guess is acceptable based on word bank, TODO: add shake animation if failed
    if (!wordSet.has(guess.join("").toLowerCase())) {
      const newAlert = { text: "Word not Allowed", duration: 500 };
      setIsAlert(true);
      setAlert(newAlert);
      return;
    }
    //Check if guess is correct, TODO:
    if (guess.join("").toLowerCase() === correctWord) {
      setGameOver(true);
      console.log("guess is correct");
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
          setAlert,
        }}
      >
        <AlertWrapper>
          {isAlert && !gameOver && (
            <Alert alertMsg={alert.text} duration={alert.duration} />
          )}
        </AlertWrapper>
        <GameBoard />
      </BoardContext.Provider>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  height: 100%;
`;

const AlertWrapper = styled.div`
  position: fixed;
  top: 10vh;
  left: 50vw;
  transform: translateX(-50%);
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
