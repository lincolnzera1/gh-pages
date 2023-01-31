import React from 'react'
import './App.css'
import { Button, Caixa, Container, Footer, Header, Links, Main, Oficinas, StyledLink, Subtitulo, Tags, Title, Titulo } from '../styled.js';

// Back4App

import { useState } from 'react';
import Parse from 'parse/dist/parse.min.js';

// Navigate
import { useNavigate } from 'react-router-dom'


// Imagens
import Chuveiro from '../assets/8213.jpg'
import Boi from "../assets/boi.jpg"
import Visao from "../assets/visao.jpg"
import Robo from "../assets/robo.jpg"
import Lit from "../assets/litLogo.png"
import { Link } from 'react-router-dom';

const Home = () => {

  const [person, setPerson] = useState(null);
  const navigate = useNavigate();

  async function addPerson() {
    try {
      // create a new Parse Object instance
      const Person = new Parse.Object('Person');
      // define the attributes you want for your Object
      Person.set('name', 'gui');
      Person.set('email', 'gui@back4app.com');
      // save it on Back4App Data Store
      await Person.save();
      console.log("deu bom")
      alert('Person saved!');
    } catch (error) {
      console.log('Error saving new person: ', error);
    }
  }

  async function fetchPerson() {
    // create your Parse Query using the Person Class you've created
    const query = new Parse.Query('Person');
    // use the equalTo filter to look for user which the name is John. this filter can be used in any data type
    query.equalTo('name', 'John');
    // run the query
    const Person = await query.first();
    // access the Parse Object attributes
    console.log('person name: ', Person.get('name'));
    console.log('person email: ', Person.get('email'));
    console.log('person id: ', Person.id);
    setPerson(Person);
  }

  function goToLoginPage() {
    navigate('/login')
  }
  
  return (
    <div className=''>
        
        <Container>
        <Header>
          
          <img src={Lit} alt="" onClick={addPerson}/>
          <img src={Lit} alt="" onClick={fetchPerson}/>
          {person !== null && (
            <div>
              <p>{`Name: ${person.get('name')}`}</p>
              <p>{`Email: ${person.get('email')}`}</p>
            </div>
          )}

          <Titulo frase='Laboratório de Inovação Tecnológica'>
          
          
                        
          </Titulo>          
            <h2>
              <span><Links href="#" ><StyledLink to='/chat' >ChatGPT</StyledLink></Links></span>
              <span><Links href='#'>Projetos</Links></span>
              <span><Links href=''> <StyledLink to='/bolsistas' >Bolsistas</StyledLink> </Links></span>
              <span><Links href='#'>Sobre</Links></span>
              <Button>Participe do Lit!</Button>
            </h2>

        </Header>
        
        <Main row1={10} row2={10} row3={50} colunas={4}>
        <Tags cor='DBFF00' onClick={goToLoginPage} >LIT!</Tags>
        <Tags cor='50E85F' >Projetos</Tags>
        <Tags cor='50E85F' ><StyledLink to="/bolsistas" >Bolsistas</StyledLink></Tags>
        <Tags cor='50E85F' >Quem vai hj?</Tags>
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