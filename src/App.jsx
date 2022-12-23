import { useState } from 'react'
import styled from 'styled-components';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>Hello</header>
      <Main></Main>
    </>
  )
}

export default App;

const Main = styled.main`
  background-color: var(--color-gray-500);
  padding: 32px;
  height: 95%;
`;