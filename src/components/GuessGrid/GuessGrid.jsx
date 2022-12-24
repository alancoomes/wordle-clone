import React from 'react'
import { Grid } from 'react-feather';
import styled from 'styled-components';


const GuessGrid = () => {
  return (
    <GridWrapper>
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
        <Box>4</Box>
        <Box>5</Box>

        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
        <Box>4</Box>
        <Box>5</Box>

        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
        <Box>4</Box>
        <Box>5</Box>

        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
        <Box>4</Box>
        <Box>5</Box>

        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
        <Box>4</Box>
        <Box>5</Box>

        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
        <Box>4</Box>
        <Box>5</Box>

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
  border: 2px solid var(--color-gray-300);
`;

export default GuessGrid;

