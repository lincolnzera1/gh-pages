import React from 'react'
import './App.css'
import { Button, Caixa, Container, Footer, Header, Links, Main, Oficinas, Subtitulo, Title, Titulo } from '../styled.js';


// Imagens
import Chuveiro from '../assets/8213.jpg'
import Boi from "../assets/boi.jpg"
import Visao from "../assets/visao.jpg"
import Robo from "../assets/robo.jpg"
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className=''>
        
        <Container>
        <Header>
          <Titulo>
            Laboratório de Inovação Tecnológica            
          </Titulo>          
            <h2><span><Links href='#'>Projetos</Links></span>
            <span><Links href='#'> <Link to='/bolsistas' >Bolsistas</Link> </Links></span>
            <span><Links href='#'>Sobre</Links></span>
            <Button>Participe do Lit!</Button>
            </h2>

        </Header>
        
        <Main>

        <Oficinas>Oficinas 4.0 e projeto do Rafael</Oficinas>  
          <Caixa url={Chuveiro}>
          </Caixa>
          <Caixa url={Boi}></Caixa>
          <Caixa url={Visao}></Caixa>
          <Caixa url={Robo}></Caixa>
        </Main>

        <Footer></Footer>

      </Container>

    </div>
  )
}

export default Home