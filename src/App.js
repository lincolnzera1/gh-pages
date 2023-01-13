import './styled.js';
import './App.css'
import { Button, Caixa, Container, Footer, Header, Links, Main, Subtitulo, Title, Titulo } from './styled.js';

function App() {
  return (
    <div className="App">      
      {/* <Title cor="black">como assim</Title>
      <Subtitulo>Felps</Subtitulo> */}
      
      <Container>

        <Header>
          <Titulo>
            Laboratório de Inovação Tecnológica            
          </Titulo>
          
            <h2><span><Links href='#'>Projetos</Links></span>
            <span><Links href='#'>Bolsistas</Links></span>
            <span><Links href='#'>Sobre</Links></span>
            <Button>Participe do Lit!</Button>
            </h2>

        </Header>
        
        <Main></Main>
        <Footer></Footer>

      </Container>
    </div>
  );
}

export default App;
