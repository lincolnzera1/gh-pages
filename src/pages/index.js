import React from 'react'
import './App.css'
import { Button, Caixa, Container, Footer, Header, Links, Main, Oficinas, StyledLink, Subtitulo, Tags, Title, Titulo } from '../styled.js';


// Imagens
import Chuveiro from '../assets/8213.jpg'
import Boi from "../assets/boi.jpg"
import Visao from "../assets/visao.jpg"
import Robo from "../assets/robo.jpg"
import Lit from "../assets/litLogo.png"
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className=''>
        
        <Container>
        <Header>

          <img src={Lit} alt="" />

          <Titulo frase='Laboratório de Inovação Tecnológica'>
          
                        
          </Titulo>          
            <h2><span><Links href='#'>Projetos</Links></span>
            <span><Links href=''> <StyledLink to='/bolsistas' >Bolsistas</StyledLink> </Links></span>
            <span><Links href='#'>Sobre</Links></span>
            <Button>Participe do Lit!</Button>
            </h2>

        </Header>
        
        <Main row1={10} row2={10} row3={50} colunas={4}>
        <Tags cor='DBFF00'>LIT!</Tags>
        <Tags cor='50E85F' >Projetos</Tags>
        <Tags cor='50E85F' ><StyledLink to="/bolsistas" >Bolsistas</StyledLink></Tags>
        <Tags cor='50E85F' >Sobre</Tags>
        <Oficinas>
          Oficinas 4.0 e projeto do Rafael
        </Oficinas>
        <Caixa radius={0} url={Chuveiro}></Caixa>
          
          <Caixa radius={0} url={Boi}></Caixa>
          <Caixa radius={0} url={Visao}></Caixa>
          <Caixa radius={0} url={Robo}></Caixa>
       
        </Main>

        <Footer></Footer>

      </Container>

    </div>
  )
}

export default Home