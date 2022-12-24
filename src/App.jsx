import { useState } from 'react'
import styled from 'styled-components';
import Header from './components/Header/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header>Hello</Header>
      <Main></Main>
    </>
  )
}

export default App;

const Main = styled.main`
  background-color: var(--color-gray-900);
  padding: 32px;
  height: 95%;
`;
