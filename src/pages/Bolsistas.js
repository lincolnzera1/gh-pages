import React from 'react'
import { Caixa, Footer, Header, Main, Titulo } from '../styled'
import Italo from '../assets/italo.jpg'
import Noe from '../assets/noe.jpg'
import Rafael from '../assets/rafael.jpg'

import Lit from '../assets/litLogo.png'

const Bolsistas = () => {
  return (
    <div>
        <Header>
          <img src={Lit} alt="" />
        </Header>
        <Main>
          <Caixa cor="white"></Caixa>
          <Caixa url={Italo} ></Caixa>
          <Caixa></Caixa>

          <Caixa url={Noe} ></Caixa>
          <Caixa></Caixa>
          <Caixa url={Rafael} ></Caixa>
        </Main>
    </div>
  )
}

export default Bolsistas