import React, { useEffect, useState } from 'react'
import { Grid } from 'react-feather';
import styled from 'styled-components';


const GuessGrid = ({letterObj}) => {

  const [letterCount, setLetterCount] = useState(0)
 
  useEffect(() => {
    const letter = letterObj.letter;
    if(letter === "") return
    if(letterCount >= 5) return
    const nextTile = document.querySelector(".tile:not([data-letter])")
    console.log(letter)
    nextTile.dataset.letter = letter;
    nextTile.classList.add("filled");
    nextTile.textContent = letter;
    setLetterCount(letterCount + 1);
  }, [letterObj]);

  const handleKeyPress = (e) => {

  }

  return (
    <GridWrapper>
        <Box className='tile'></Box>
        <Box className='tile'></Box>
        <Box className='tile'></Box>
        <Box className='tile'></Box>
        <Box className='tile'></Box>

        <Box className='tile'></Box>
        <Box className='tile'></Box>
        <Box className='tile'></Box>
        <Box className='tile'></Box>
        <Box className='tile'></Box>

        <Box className='tile'></Box>
        <Box className='tile'></Box>
        <Box className='tile'></Box>
        <Box className='tile'></Box>
        <Box className='tile'></Box>

        <Box className='tile'></Box>
        <Box className='tile'></Box>
        <Box className='tile'></Box>
        <Box className='tile'></Box>
        <Box className='tile'></Box>

        <Box className='tile'></Box>
        <Box className='tile'></Box>
        <Box className='tile'></Box>
        <Box className='tile'></Box>
        <Box className='tile'></Box>

        <Box className='tile'></Box>
        <Box className='tile'></Box>
        <Box className='tile'></Box>
        <Box className='tile'></Box>
        <Box className='tile'></Box>

    </GridWrapper>
  )
}

const GridWrapper = styled.div`
   display: grid;
   gap: 4px;
   grid-template-columns: repeat(5, minmax(50px, 1fr));
   grid-template-rows: repeat(6, minmax(50px,1fr));
   width: 350px;
   height: 420px;
`;

const Box = styled.div`
  border: 2px solid var(--color-gray-500);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;

  &.filled {
    border-color: var(--color-gray-300);
  }
`;

export default GuessGrid;

