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
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto;
    align-items: center;

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
        border: 0;
        border-radius: 50%;

        height: 70%;
        width: 100%;

        background-color: white;
    }
`

export const Oficinas = styled.h1`
    grid-column-start: 1;
    grid-column-end: 5;

    text-align: center;

    margin-top: 50px;

    @media (max-width: 700px) {
        display: none;
    }
`

export const StyledLink = styled(Link)`
    text-decoration: none;
`