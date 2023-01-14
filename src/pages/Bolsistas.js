import React from 'react'
import { Caixa, Footer, Header, Main, Titulo } from '../styled'
import Italo from '../assets/italo.jpg'
import Noe from '../assets/noe2.jpg'
import Rafael from '../assets/rafael.jpg'

import Lit from '../assets/litLogo.png'

import { useNavigate } from 'react-router-dom'

const Bolsistas = () => {

  const navigate = useNavigate();

  return (
    <div>
        <Header>
          <img src={Lit} alt="" onClick={() => {navigate('/')}}/>
        </Header>
        <Main colunas={3} row1={20} row2={40} row3={40}>
          <h2>Bolsistas mais gaiatos</h2>
          <Caixa border={0} cor="white"></Caixa>
          <Caixa radius={50} url={Italo} ></Caixa>
          <Caixa border={0}></Caixa>

          <Caixa radius={50} url={Noe} ></Caixa>
          <Caixa border={0}></Caixa>
          <Caixa radius={50} url={Rafael} ></Caixa>
        </Main>
    </div>
  )
}

export default Bolsistas