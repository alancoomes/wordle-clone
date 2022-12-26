import { useState } from 'react'
import styled from 'styled-components';
import GuessGrid from './components/GuessGrid/GuessGrid';
import Header from './components/Header/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header>Hello</Header>
      <Main>
        <GuessGrid/>
      </Main>
    </>
  )
}

export default App;

const Main = styled.main`
  background-color: var(--color-gray-900);
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
