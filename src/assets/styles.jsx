import styled, { keyframes } from 'styled-components';

export const Tela = styled.div`

    height: 100vh;
    width: 100vw;

`

export const Pulo = keyframes`
    0% {
        bottom: 0px;
    }

    40%, 60%,70% {
        bottom: 180px;
    }

    50% {
        bottom: 180px;
    }

    100% {
        bottom: 0px;
    }
`



export const GameScreen = styled.div`
    position: relative;

    height: 70vh;
    width: 100vw;

    border: 2px solid black;

    overflow: hidden;

    // background: linear-gradient(#87ceeb, #e0f6ff);

    * {
        padding: 0;
        margin: 0;
    }

    img {
        position: absolute;
        /* bottom: 120px; */
        bottom: 0px;
        animation: ${props => props.pule ? Pulo : 0} 400ms linear
    }
`

export const Animacao = keyframes`
    0% {
        right: 0%;
    }

    100% {
        right: 100%;
    }
`

export const Obstaculo = styled.div`
    position: absolute;
    bottom: 0;

    animation: ${props => props.parar ? 'none' : Animacao} 1s infinite linear;
    // left: 260px;

    height: 100px;
    width: 100px;

    background-color: lightsalmon;
    
    border: 2px solid black;

    
`
