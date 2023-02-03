import React, { useEffect, useRef, useState } from 'react'
import { GameScreen, Obstaculo, Tela } from '../assets/styles.jsx'

// Imagens
import Robo from '../assets/correr.gif';
import Xis from '../assets/xis.png';
import RoboParado from '../assets/roboParado.png';

const Game = () => {

  const cores = ["red", "black", 'tomato', 'grey', 'blue']
  const random = Math.random() * (5 - 1) + 1;

  const [pule, setPule] = useState(false);
  const [key, setKey] = useState("");

  const [parar, setParar] = useState(false);
  const [tempo, setTempo] = useState(10);

  const imageRef = useRef(null);
  const obstaculoRef = useRef(null);
  const  divRef = useRef(null);

  const [alturaRobo, setAlturaRobo] = useState(0);
  const [controleImagem, setControleImagem] = useState(false);

  const [lista, setLista] = useState([1]);
  const [pontos, setPontos] = useState(0);

  const handleKeyDown = (e) => {
    /* console.log("diokpqwdoqwdiokpqwdoqwdiokpqwdoqwdiokpqwdoqwdiokpqwdoqwdiokpqwdoqwdiokpqwdoqwdiokpqwdoqwdiokpqwdoqwdiokpqwdoqwdiokpqwdoqwdiokpqwdoqwdiokpqwdoqwdiokpqwdoqwdiokpqwdoqwdiokpqwdoqwdiokpqwdoqwdiokpqwdoqwdiokpqwdoqwdiokpqwdoqwdiokpqwdoqwdiokpqwdoqwdiokpqwdoqwdiokpqwdoqwdiokpqwdoqwdiokpqwdoqwdiokpqwdoqwdiokpqwdoqwdiokpqwdoqwdiokpqwdoqw") */
    if(e.key === "f" && pule === false){
      setKey(e.key)
      setPule(true);

      setTimeout(() => {
        setPule(false)
      }, 400);
    }
  };

  const handleKeyUp = () => {
    //setPule(false);
    setKey("")
  };

  const addToList = (item) => {
    setLista([...lista, item]);
  };

  useEffect(() => {
    let isExecuting = false;
    
    if(divRef.current) {
      divRef.current.focus();
    }

    const intervalId = setInterval(() => { 
      if (!isExecuting) {
        isExecuting = true;
        console.log("Executing setInterval");

        if(obstaculoRef.current && imageRef.current) {
          // console.log(imageRef.current.offsetLeft + " oi")
          const computedStyle = window.getComputedStyle(obstaculoRef.current);
          const computedRobotStyle = window.getComputedStyle(imageRef.current);
          let animarImagem = computedStyle.getPropertyValue('left');
          const BottomRobot = parseInt(window.getComputedStyle(imageRef.current).bottom.replace('px',""))
          let leftRobot = imageRef.current.offsetLeft;
          // setAlturaRobo(BottomRobot)
          
          
    
          console.log(+animarImagem.replace('px',""))
          
    
          if(obstaculoRef.current.offsetLeft <= 260 && obstaculoRef.current.offsetLeft > 0 && BottomRobot <= 60){
            // console.log("BAIXO ROBO: " + BottomRobot)
            // console.log("altura do robo: " + BottomRobot)
            // console.log(`outra lista: ${lista1}`)
            obstaculoRef.current.style.left = `${obstaculoRef.current.offsetLeft}px`; // Para a caixa na posição em que encontra o boneco
            setControleImagem(true)
            imageRef.current.style.animation = 'none'
            imageRef.current.style.bottom = `${BottomRobot}px`
            // imageRef.current.style.bottom = "180px";
            clearInterval(intervalId) // faz a aplicação parar
            
          }else if (+animarImagem.replace('px',"") <= 0) {
            setPontos((prev) => {
              console.log("Seu prev: " + prev)
              return prev + 10
            })
          }
        }

        setTimeout(() => {
          isExecuting = false;
        }, 24);
      }
    }, 20);
    return () => clearInterval(intervalId);
  }, []);

  

  return (
      <Tela ref={divRef} tabIndex={0} onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} >
        <GameScreen pule={pule}  >

          <p>Pressione uma tecla</p>
          <p>Tecla pressionada: {key}</p>
          <p>Pontos: {pontos}</p>

          <img ref={imageRef} src={controleImagem ? RoboParado : Robo} height={300} alt="" id='imagem' />

          <Obstaculo parar={parar} ref={obstaculoRef} ></Obstaculo>
          </GameScreen>
      </Tela>
  )
}

export default Game