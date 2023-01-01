import { useState, createContext } from "react";
import styled from "styled-components";
import GameBoard from "./components/GameBoard/GameBoard";
import Header from "./components/Header/Header";
import { boardDefault } from "./constants";

export const BoardContext = createContext(boardDefault);

function App() {
  const word = ["S", "T", "A", "R", "E"];
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({
    attempt: 0,
    letterPosition: 0,
  });

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
    if (currAttempt.letterPosition !== 5) return;
    if (currAttempt.attempt !== 5) {
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPosition: 0 });
    }
    const guess = board[currAttempt.attempt];
    if (isGuessRight(guess, word)) {
      setCurrAttempt({ attempt: 5, letterposition: 4 });
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

  const isGuessRight = (guess, answer) => {
    for (let i = 0; i < guess.length; i++) {
      if (guess[i] !== answer[i]) return false;
    }
    return true;
  };

  // async function fetchWord()  {
  //     setLoading(true);
  //     let response = await fetch("https://random-word-api.herokuapp.com/word?length=5");
  //     let word = await response.json();
  //     setWord(word[0]);
  // }

  // useEffect(() => {
  //   fetchWord();
  // },[]);

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
