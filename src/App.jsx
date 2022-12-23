import { useState } from 'react'
import styled from 'styled-components';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header>Hello</Header>
      <header></header>
      <main></main>
    </>
  )
}

export default App;

const Header = styled.h2`
  font-size: 2rem;
`;