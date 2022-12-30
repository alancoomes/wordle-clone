import { useState } from 'react'
import styled from 'styled-components';
import GuessGrid from './components/GuessGrid/GuessGrid';
import Header from './components/Header/Header';
import Keyboard from './components/Keyboard/Keyboard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <AppWrapper>
      <Header></Header>
      <Main>
        <BoardWrapper>
          <GuessGrid/>
        </BoardWrapper>
        
          <Keyboard/>
        
      </Main>
    </AppWrapper>
  )
}

export default App;

const BoardWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AppWrapper = styled.div`
  height: 100%;
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



