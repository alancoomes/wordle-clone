import { useState, useEffect, createContext } from "react";
import styled from "styled-components";
import GameBoard from "./components/GameBoard/GameBoard";
import Header from "./components/Header/Header";
import { boardDefault } from "./constants";

export const BoardContext = createContext(boardDefault);

function App() {
  const [word, setWord] = useState("stare");
  const [loading, setLoading] = useState(false);
  const [error, seError] = useState(null);
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({
    attempt: 0,
    letterPosition: 0,
  });

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
        }}
      >
        <GameBoard word={word} />
      </BoardContext.Provider>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  height: 100%;
`;
