import GlobalStyle from './styles/Global';
import { Container } from './styles/Container';

function App() {
  return (
    <>
      <GlobalStyle />
      <h1>Vite + React</h1>
      <h2>Styled Components Example</h2>
      <Container>
        <p>Inside the container</p>
      </Container>
    </>
  );
}

export default App;

