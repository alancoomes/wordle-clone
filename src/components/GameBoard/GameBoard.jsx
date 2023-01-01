import styled from "styled-components";
import GuessGrid from "../GuessGrid/GuessGrid";
import Keyboard from "../Keyboard/Keyboard";

const GameBoard = () => {
  return (
    <Main>
      <BoardWrapper>
        <GuessGrid />
      </BoardWrapper>
      <Keyboard />
    </Main>
  );
};

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
