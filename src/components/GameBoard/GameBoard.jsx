import { useState } from 'react'
import styled from 'styled-components';
import GuessGrid from '../GuessGrid/GuessGrid';
import Keyboard from '../Keyboard/Keyboard';

const GameBoard = () => {

    const [guess, setGuess] = useState(null);
    const [letterObj, setLetter] = useState({sameLetterCnt: 0, letter: ""});


    const handleNewLetterGuess = (e) => {
       if (e.target.value === letterObj.letter) {
        setLetter({...letterObj, sameLetterCnt: letterObj.sameLetterCnt + 1});
       }
       setLetter({...letterObj, letter: e.target.value});
    }

    const handleEnterGuess = (e) => {
        console.log(e.target.value);
    }

    const handleDeleteLetter = (e) => {
        console.log(document.querySelectorAll('.tile.filled'));

    }

  return (
    <Main>
    <BoardWrapper>
      <GuessGrid letterObj={letterObj}/>
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