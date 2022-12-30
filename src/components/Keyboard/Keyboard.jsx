import React from 'react'
import styled from 'styled-components';

const Keyboard = () => {
  return (
    <Wrapper>
       <Row>
        <Key data-key="Q">Q</Key>
        <Key data-key="W">W</Key>
        <Key data-key="E">E</Key>
        <Key data-key="R">R</Key>
        <Key data-key="T">T</Key>
        <Key data-key="Y">Y</Key>
        <Key data-key="U">U</Key>
        <Key data-key="I">I</Key>
        <Key data-key="O">O</Key>
        <Key data-key="P">P</Key>
       </Row>

      <Row>
        <KeyHalf/>
        <Key data-key="A">A</Key>
        <Key data-key="S">S</Key>
        <Key data-key="D">D</Key>
        <Key data-key="F">F</Key>
        <Key data-key="G">G</Key>
        <Key data-key="H">H</Key>
        <Key data-key="J">J</Key>
        <Key data-key="K">K</Key>
        <Key data-key="L">L</Key>
        <KeyHalf/>
      </Row>

      <Row>

        <KeyAndOneHalf data-key="enter">Enter</KeyAndOneHalf>
        <Key data-key="Z">Z</Key>
        <Key data-key="X">X</Key>
        <Key data-key="C">C</Key>
        <Key data-key="V">V</Key>
        <Key data-key="B">B</Key>
        <Key data-key="N">N</Key>
        <Key data-key="M">M</Key>
        <KeyAndOneHalf data-key="delete">Del</KeyAndOneHalf>
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

