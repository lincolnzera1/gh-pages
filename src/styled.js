import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Italo from './assets/italo.jpg'

/* export const Title = styled.h1` // O "h1" é a tag que vai ser usada (não pode ser qualquer coisa, tem que ser a tag que tu quer).
    color: ${props => props.cor};
`

export const Subtitulo = styled.h2`
    color: blue;
` */

export const Container = styled.div`
    display: grid;
    grid-template-areas: 
    'header header header'
    'main main main'
    'footer footer footer';

    margin: 0px;
    padding: 0px;

`

export const Header = styled.header`
    grid-area: header;

    text-align: center;

    background-color: #51D65E;
    font-family: Inte;

    height: 10vh;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom: 3px solid black;

    img {
        height: 100px;
        display: none;
    }

    @media (max-width: 700px) {
        background-color: #50E85F;                    
        text-align: center;
        display: flex;
        justify-content: center;

        img {
            text-align: center;
            display: flex;
            height: 100%;
        }

        h2 {
            display: none;
        }


    }
`

export const Main = styled.main`
   grid-area: main;
   background-color: white;
   height: 80vh;

   display: grid;
   grid-template-columns: auto auto auto auto;
   grid-template-rows: 20% 80vh;

   @media (max-width: 700px) {
    
    display: grid;
    grid-template-columns: repeat(${props => props.colunas}, auto);
    grid-template-rows: ${props => props.row1}% ${props => props.row2}% ${props => props.row3}%;
    align-items: flex-end;

    border-radius: ${props => props.radius};

    h2 {
        grid-column-start: 1;
        grid-column-end: 4;

        margin: auto;
    }

    padding: 10px;

   }
   
`

export const Footer = styled.footer`
    grid-area: footer;
    background-color: black;
    height: 10vh;

    margin-top: -3px;
`

export const Titulo = styled.h1`
    font-weight: bold;
    text-align: start;

    padding: 10px;
    padding-left: 60px;

    @media (max-width: 700px) { // Para o titulo sumir e a imagem do lit ficar no meio.
        display: none;
    }
`

export const Links = styled.a`
    text-decoration: none;
    
    margin-left: 20px;
    padding: 5px;

    &:visited {
        color: black;
    }

    &:link {
        color: black;
    }

    &:hover {
        cursor: pointer;
    }

`

export const Button = styled.button`
    height: 55px;
    width: 200px;
    background-color: #DBFF00;

    font-size: 22px;
    font-weight: bold;

    border-radius: 8px;
    margin: 0 4px 0 12px;
    /* offset-x | offset-y | blur-radius | color */
    box-shadow: 5px 5px 4px black;

    cursor: pointer;

    &:hover {
        transform: scale(1.1);
    }
`

export const Caixa = styled.div`

    height: 80%;
    background-color: tomato;

    background-image: url(${props => props.url});
    background-size: 100% 100%;
    background-repeat: no-repeat;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 4px solid black;

    &:hover {
        transform: scale(0.9);
    }

    cursor: pointer;

    @media (max-width: 700px) {
        border: ${props => props.border}px solid black;
        border-radius: ${props => props.radius}%;

        height: 70%;
        width: 100%;

        background-color: white;
    }
`

export const Oficinas = styled.h1`
    grid-column-start: 1;
    grid-column-end: 5;
    text-align: center;

    font-size: 28px;
    margin-top: 50px;

    @media (max-width: 700px) {
        h1 {
            font-size: 25px;
        }
    
        grid-column-start: 1;
        grid-column-end: 5;
    }
`

export const StyledLink = styled(Link)`
    text-decoration: none;
`


export const Tags = styled.div`
    border-radius: 20px;
    border: 2px solid black;

    /* offset-x | offset-y | blur-radius | color */
    box-shadow: 5px 5px 4px black;
    background-color: #${props => props.cor};
    
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;

    margin: 7px;

    @media (min-width: 700px) {
        display: none;
    }
`

export const Registro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #d0f16c;
    height: 90vh;
    width: 100vw;

    p {
        font-size: 17px;
        color: black;

        margin-left: auto;
        margin-right: 60px;

    }
`

export const Input = styled.input`

  background-color: ${props => props.backgroundColor};
  height: 50px;
  width: 80vw;

  border: 1px solid black;
  border-radius: 20px;

  margin-bottom: 25px;

  font-size: ${props => props.fontsize}px;
  padding-left: ${props => props.padding}px;

  ::placeholder {
    color: black;
    

    font-size: ${props => props.fontsize}px;
  }

  :focus {
    border: 0;
  }
`

export const InputsText = styled.div`
    margin-bottom: 20px;
    

    p {
        visibility: ${props => props.condition};
        color: red; 
        font-size: 20px;
        margin: -20px 0 -43px 0px;

        
    }
`

export const ChatScreen = styled.div`
    background-color: lightgrey;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-size: 22px;

    height: 100vh;
    width: 100vw;

    p {
        text-align: justify;
    
        width: 70vw;

        border: 2px solid black;
    }
    

    textarea {
        width: 300px;
        
        padding-bottom: 50px;
        font-size: 20px;

        word-break: break-all;

        margin-bottom: 30px;
    }

    button {
        width: 300px;
        height: 60px;

        font-size: 25px;

        background-color: #51D65E;

        border-radius: 10px;

        margin-bottom: 30px;
    }
`