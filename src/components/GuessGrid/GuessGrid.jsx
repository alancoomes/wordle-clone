import styled from "styled-components";
import Letter from "../Letter/Letter";

const GuessGrid = () => {
  return (
    <GridWrapper>
      <Letter attemptVal={0} letterPos={0}></Letter>
      <Letter attemptVal={0} letterPos={1}></Letter>
      <Letter attemptVal={0} letterPos={2}></Letter>
      <Letter attemptVal={0} letterPos={3}></Letter>
      <Letter attemptVal={0} letterPos={4}></Letter>

      <Letter attemptVal={1} letterPos={0}></Letter>
      <Letter attemptVal={1} letterPos={1}></Letter>
      <Letter attemptVal={1} letterPos={2}></Letter>
      <Letter attemptVal={1} letterPos={3}></Letter>
      <Letter attemptVal={1} letterPos={4}></Letter>

      <Letter attemptVal={2} letterPos={0}></Letter>
      <Letter attemptVal={2} letterPos={1}></Letter>
      <Letter attemptVal={2} letterPos={2}></Letter>
      <Letter attemptVal={2} letterPos={3}></Letter>
      <Letter attemptVal={2} letterPos={4}></Letter>

      <Letter attemptVal={3} letterPos={0}></Letter>
      <Letter attemptVal={3} letterPos={1}></Letter>
      <Letter attemptVal={3} letterPos={2}></Letter>
      <Letter attemptVal={3} letterPos={3}></Letter>
      <Letter attemptVal={3} letterPos={4}></Letter>

      <Letter attemptVal={4} letterPos={0}></Letter>
      <Letter attemptVal={4} letterPos={1}></Letter>
      <Letter attemptVal={4} letterPos={2}></Letter>
      <Letter attemptVal={4} letterPos={3}></Letter>
      <Letter attemptVal={4} letterPos={4}></Letter>

      <Letter attemptVal={5} letterPos={0}></Letter>
      <Letter attemptVal={5} letterPos={1}></Letter>
      <Letter attemptVal={5} letterPos={2}></Letter>
      <Letter attemptVal={5} letterPos={3}></Letter>
      <Letter attemptVal={5} letterPos={4}></Letter>
    </GridWrapper>
  );
};

const GridWrapper = styled.div`
  display: grid;
  gap: 4px;
  grid-template-columns: repeat(5, minmax(50px, 1fr));
  grid-template-rows: repeat(6, minmax(50px, 1fr));
  width: 350px;
  height: 420px;
`;

export default GuessGrid;
