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
  const [wordSet, setWordSet] = useState([]);

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
    if (currAttempt.letterPosition !== 5) return;
    if (currAttempt.attempt === 5) {
      return;
    }
    const guess = board[currAttempt.attempt];
    if (!wordSet.has(guess.join("").toLowerCase())) return;
    if (isGuessRight(guess, correctWord)) {
      setCurrAttempt({ attempt: 5, letterposition: 4 });
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
          correctWord,
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
