import './styled.js';
import './App.css'
import { Caixa, Container, Footer, Header, Links, Main, Subtitulo, Title, Titulo } from './styled.js';

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
          
          <Links>
            <h2><span><Links>Projetos</Links></span>
            <span><Links>Bolsistas</Links></span>
            <span><Links href=''>Sobre</Links></span></h2>
          </Links>

        </Header>
        
        <Main>


        </Main>
        

        <Footer></Footer>

      </Container>
    </div>
  );
}

export default App;
