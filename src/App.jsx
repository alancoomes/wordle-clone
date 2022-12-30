import styled from 'styled-components';
import GameBoard from './components/GameBoard/GameBoard';
import Header from './components/Header/Header';

function App() {
  const [word, setWord] = useState(null)
  const [loading, setLoading] = useState(false);
  const [error, seError] = useState(null);
  
  const fetchWord = () => {
      setLoading(true);
      fetch()
  }

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





