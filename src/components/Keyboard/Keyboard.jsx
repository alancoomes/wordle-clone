import React from 'react'
import styled from 'styled-components';

const Keyboard = () => {
  return (
    <Wrapper>
        <div>Q</div>
        <div>W</div>
        <div>E</div>
        <div>R</div>
        <div>T</div>
        <div>Y</div>
        <div>U</div>
        <div>I</div>
        <div>O</div>
        <div>P</div>

        <div>A</div>
        <div>S</div>
        <div>D</div>
        <div>F</div>
        <div>G</div>
        <div>H</div>
        <div>J</div>
        <div>K</div>
        <div>L</div>

        <div>Enter</div>
        <div>Z</div>
        <div>X</div>
        <div>C</div>
        <div>V</div>
        <div>B</div>
        <div>N</div>
        <div>M</div>
        <div>Q</div>
        <div>Del</div>
        
    </Wrapper>
  )
}

const Wrapper = styled.div`
    text-transform: uppercase;
    display: grid;
`;

export default Keyboard;