import React from 'react'
import styled from 'styled-components';

const Keyboard = () => {
  return (
    <Wrapper>
       <Row>
        <Key>Q</Key>
        <Key>W</Key>
        <Key>E</Key>
        <Key>R</Key>
        <Key>T</Key>
        <Key>Y</Key>
        <Key>U</Key>
        <Key>I</Key>
        <Key>O</Key>
        <Key>P</Key>
       </Row>

      <Row>
        <KeyHalf/>
        <Key>A</Key>
        <Key>S</Key>
        <Key>D</Key>
        <Key>F</Key>
        <Key>G</Key>
        <Key>H</Key>
        <Key>J</Key>
        <Key>K</Key>
        <Key>L</Key>
        <KeyHalf/>
      </Row>

      <Row>

        <KeyAndOneHalf>Enter</KeyAndOneHalf>
        <Key>Z</Key>
        <Key>X</Key>
        <Key>C</Key>
        <Key>V</Key>
        <Key>B</Key>
        <Key>N</Key>
        <Key>M</Key>
        <Key>Q</Key>
        <KeyAndOneHalf>Del</KeyAndOneHalf>
      </Row>
        
    </Wrapper>
  )
}

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


export default Keyboard;