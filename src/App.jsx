import { useState, useEffect } from 'react';
import styled from 'styled-components';
import GameBoard from './components/GameBoard/GameBoard';
import Header from './components/Header/Header';

function App() {
  const [word, setWord] = useState(null)
  const [loading, setLoading] = useState(false);
  const [error, seError] = useState(null);
  
  async function fetchWord()  {
      setLoading(true);
      let response = await fetch("https://random-word-api.herokuapp.com/word?length=5");
      let word = await response.json();
      setWord(word[0]);
  }

  useEffect(() => {
    fetchWord();
  },[]);


  return (
    <AppWrapper>
      <Header></Header>
      <GameBoard/>
    </AppWrapper>
  )
}

export default App;


const AppWrapper = styled.div`
  height: 100%;
`;





