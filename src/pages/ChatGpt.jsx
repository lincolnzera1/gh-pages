import React, { useState, useEffect } from "react";
import axios from "axios";
import { ChatScreen, Header } from "../styled";

const ChatGpt = () => {

  const [pergunta, setPergunta] = useState("");
  const [generatedText, setGeneratedText] = useState("");
  const Api_key = process.env.REACT_APP_PARSE_CHAT_KEY;

  const send = (pergunta) => {
    console.log("Sua pergunta: " + pergunta)
    fetch("https://api.openai.com/v1/completions", {
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

        if (json.error?.message) {
          console.log(`Error: ${json.error.message}`);
        } else if (json.choices?.[0].text) {
          var text = json.choices[0].text || "Sem resposta";

          console.log("Chat GPT: " + text)
          setGeneratedText(text);
        }

      })
      .catch((error) => console.error("Error:", error))
      .finally(() => {
      });

  }

  const Enviar = () => {
    setGeneratedText("Carregando...")
    send(pergunta);
  }


  return (
    <div>
      <div>
        <Header></Header>
        <ChatScreen>
            <textarea placeholder="Faça uma pergunta!" onChange={e =>setPergunta(e.target.value)} ></textarea>
            <button type="button" onClick={Enviar}>Enviar</button>
            <p>{generatedText}</p>
        </ChatScreen>
      </div>
    </div>
  )
}

export default ChatGpt