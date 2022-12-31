import React from 'react'
import styled from 'styled-components';

const Keyboard = ({newLetterGuess, enterGuess, deleteLetter}) => {
  return (
    <Wrapper>
       <Row>
        <Key onClick={newLetterGuess} value="Q">Q</Key>
        <Key onClick={newLetterGuess} value="W">W</Key>
        <Key onClick={newLetterGuess} value="E">E</Key>
        <Key onClick={newLetterGuess} value="R">R</Key>
        <Key onClick={newLetterGuess} value="T">T</Key>
        <Key onClick={newLetterGuess} value="Y">Y</Key>
        <Key onClick={newLetterGuess} value="U">U</Key>
        <Key onClick={newLetterGuess} value="I">I</Key>
        <Key onClick={newLetterGuess} value="O">O</Key>
        <Key onClick={newLetterGuess} value="P">P</Key>
       </Row>

      <Row>
        <KeyHalf/>
        <Key onClick={newLetterGuess} value="A">A</Key>
        <Key onClick={newLetterGuess} value="S">S</Key>
        <Key onClick={newLetterGuess} value="D">D</Key>
        <Key onClick={newLetterGuess} value="F">F</Key>
        <Key onClick={newLetterGuess} value="G">G</Key>
        <Key onClick={newLetterGuess} value="H">H</Key>
        <Key onClick={newLetterGuess} value="J">J</Key>
        <Key onClick={newLetterGuess} value="K">K</Key>
        <Key onClick={newLetterGuess} value="L">L</Key>
        <KeyHalf/>
      </Row>

      <Row>

        <KeyAndOneHalf onClick={enterGuess} value="enter">Enter</KeyAndOneHalf>
        <Key onClick={newLetterGuess} value="Z">Z</Key>
        <Key onClick={newLetterGuess} value="X">X</Key>
        <Key onClick={newLetterGuess} value="C">C</Key>
        <Key onClick={newLetterGuess} value="V">V</Key>
        <Key onClick={newLetterGuess} value="B">B</Key>
        <Key onClick={newLetterGuess} value="N">N</Key>
        <Key onClick={newLetterGuess} value="M">M</Key>
        <KeyAndOneHalf onClick={deleteLetter} value="delete">Del</KeyAndOneHalf>
      </Row>
        
    </Wrapper>
  )
}

export default Keyboard;

const Row = styled.div`
  width: 100%;
  margin: 0 auto 8px;
  display: flex;
  gap: 6px;
  justify-content: center;
`;

const Wrapper = styled.div`
    height: var(--keyboard-height);
    margin-left: 6px;
    margin-right: 6px;
`;

const Key = styled.button`
  font-weight: 900;
  border: none;
  border-radius: 4px;
  color: white;
  background-color: var(--color-gray-300);
  margin: 0;
  padding: 0;
  height: 58px;
  flex: 1;
`;

const KeyAndOneHalf = styled(Key)`
  flex: 1.5;
`;

const KeyHalf = styled.div`
  flex: .5;
`;

