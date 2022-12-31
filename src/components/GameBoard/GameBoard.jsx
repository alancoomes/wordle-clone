import { useState } from 'react'
import styled from 'styled-components';
import GuessGrid from '../GuessGrid/GuessGrid';
import Keyboard from '../Keyboard/Keyboard';

const GameBoard = () => {

    const [guess, setGuess] = useState(null);
    const [letter, setLetter] = useState("");

    const handleNewLetterGuess = (e) => {
       setLetter(e.target.value);
    }

    const handleEnterGuess = (e) => {
        console.log(e.target.value);
    }

    const handleDeleteLetter = (e) => {
        console.log(e.target.value);
    }

  return (
    <Main>
    <BoardWrapper>
      <GuessGrid letter={letter}/>
    </BoardWrapper>
    
      <Keyboard newLetterGuess={handleNewLetterGuess} enterGuess={handleEnterGuess} deleteLetter={handleDeleteLetter}/>
    
    </Main>
  )
}

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