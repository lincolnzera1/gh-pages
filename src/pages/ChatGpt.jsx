import React, { useState, useEffect } from "react";
import axios from "axios";
import { ChatScreen, Header } from "../styled";

const ChatGpt = () => {

  const [pergunta, setPergunta] = useState("");
  const [generatedText, setGeneratedText] = useState("");
  const [nada, setNada] = useState("um");
  const Api_key = process.env.REACT_APP_PARSE_CHAT_KEY;

  const send = (pergunta) => {/* 
    console.log("Sua pergunta: " + pergunta)

    // frnot end
    fetch("http://localhost:10000/api", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + Api_key,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: pergunta,
        max_tokens: 2048, // tamanho da resposta
        temperature: 0.5, // criatividade na resposta
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("deixa eu ver")
        if (json.error?.message) {
          console.log(`Error: ${json.error.message}`);
        } else if (json.choices?.[0].text) {
          var text = json.choices[0].text || "Sem resposta";

          console.log("Chat GPT Frontend: " + text)
          setGeneratedText(text);
        }

      })
      .catch((error) => console.error("Error:", error))
      .finally(() => {
      }); */

  }

  const Enviar = () => {
    setGeneratedText("Carregando...")
    send(pergunta);
  }

  const [data, setData] = useState({});

  // nao usa esse

  const handleSubmit = async (event) => {
    setGeneratedText("Carregando...")
    event.preventDefault(); // https://backend2-zzzlincoln1-gmailcom.vercel.app/api
    try {                   // http://localhost:10000/api
      setGeneratedText("Carregando...")
      const response = await axios.post('https://backend2-zzzlincoln1-gmailcom.vercel.app/api', data)
        .then(response => {
          const message = response.data
          console.log("Sua mensagem, finalmente, é: " + JSON.stringify(message.message))
          setGeneratedText(message.message)
        });
      // console.log("seus dados: " + response.data);
    } catch (erro) {
      console.error(erro); 
    }
  };


  return (
    <div>
      <div>
        <Header><h2>Sou um versão burra ainda do meu original, tenha paciência</h2></Header>
        {/* <form onSubmit={handleSubmit}>
          <input type="text" onChange={(event) => setData({ ...data, name: event.target.value })} />
          <button type="submit">Submit</button>
        </form> */}
        <ChatScreen>
          <textarea placeholder="Faça uma pergunta!" onChange={(e) => setData({ ...data, name: e.target.value })} ></textarea>
          <button type="button" onClick={handleSubmit}>Enviar</button>
          <p>{generatedText}</p>
        </ChatScreen>
      </div>
    </div>
  )
}

export default ChatGpt