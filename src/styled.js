import styled from 'styled-components';

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
`

export const Main = styled.main`
   grid-area: main;
   background-color: white;
   height: 80vh;
`

export const Footer = styled.footer`
    grid-area: footer;
    background-color: black;
    height: 10vh;
`

export const Titulo = styled.h1`
    font-weight: bold;
    text-align: start;

    padding: 10px;
    padding-left: 60px;
`

export const Links = styled.a`
    text-decoration: none;
    margin-left: 20px;
    padding: 5px;

    &:visited {
        color: black;
    }

    &:hover {
        
    }

`
