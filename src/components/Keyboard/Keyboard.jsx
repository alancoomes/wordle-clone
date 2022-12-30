import React from 'react'
import styled from 'styled-components';

const Keyboard = ({handleClickNewLetterGuess}) => {
  return (
    <Wrapper>
       <Row>
        <Key onClick={handleClickNewLetterGuess} value="Q">Q</Key>
        <Key value="W">W</Key>
        <Key value="E">E</Key>
        <Key value="R">R</Key>
        <Key value="T">T</Key>
        <Key value="Y">Y</Key>
        <Key value="U">U</Key>
        <Key value="I">I</Key>
        <Key value="O">O</Key>
        <Key value="P">P</Key>
       </Row>

      <Row>
        <KeyHalf/>
        <Key value="A">A</Key>
        <Key value="S">S</Key>
        <Key value="D">D</Key>
        <Key value="F">F</Key>
        <Key value="G">G</Key>
        <Key value="H">H</Key>
        <Key value="J">J</Key>
        <Key value="K">K</Key>
        <Key value="L">L</Key>
        <KeyHalf/>
      </Row>

      <Row>

        <KeyAndOneHalf value="enter">Enter</KeyAndOneHalf>
        <Key value="Z">Z</Key>
        <Key value="X">X</Key>
        <Key value="C">C</Key>
        <Key value="V">V</Key>
        <Key value="B">B</Key>
        <Key value="N">N</Key>
        <Key value="M">M</Key>
        <KeyAndOneHalf value="delete">Del</KeyAndOneHalf>
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

