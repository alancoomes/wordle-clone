import React from 'react'
import styled from 'styled-components';

const Keyboard = ({handleClick}) => {
  return (
    <Wrapper>
       <Row>
        <Key onClick={handleClick} value="Q">Q</Key>
        <Key onClick={handleClick} value="W">W</Key>
        <Key onClick={handleClick} value="E">E</Key>
        <Key onClick={handleClick} value="R">R</Key>
        <Key onClick={handleClick} value="T">T</Key>
        <Key onClick={handleClick} value="Y">Y</Key>
        <Key onClick={handleClick} value="U">U</Key>
        <Key onClick={handleClick} value="I">I</Key>
        <Key onClick={handleClick} value="O">O</Key>
        <Key onClick={handleClick} value="P">P</Key>
       </Row>

      <Row>
        <KeyHalf/>
        <Key onClick={handleClick} value="A">A</Key>
        <Key onClick={handleClick} value="S">S</Key>
        <Key onClick={handleClick} value="D">D</Key>
        <Key onClick={handleClick} value="F">F</Key>
        <Key onClick={handleClick} value="G">G</Key>
        <Key onClick={handleClick} value="H">H</Key>
        <Key onClick={handleClick} value="J">J</Key>
        <Key onClick={handleClick} value="K">K</Key>
        <Key onClick={handleClick} value="L">L</Key>
        <KeyHalf/>
      </Row>

      <Row>

        <KeyAndOneHalf onClick={handleClick} value="Enter">Enter</KeyAndOneHalf>
        <Key onClick={handleClick} value="Z">Z</Key>
        <Key onClick={handleClick} value="X">X</Key>
        <Key onClick={handleClick} value="C">C</Key>
        <Key onClick={handleClick} value="V">V</Key>
        <Key onClick={handleClick} value="B">B</Key>
        <Key onClick={handleClick} value="N">N</Key>
        <Key onClick={handleClick} value="M">M</Key>
        <KeyAndOneHalf onClick={handleClick} value="Delete">Del</KeyAndOneHalf>
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

