import React, { useState } from 'react'
import { Header, Input, InputsText, Main, Registro } from '../styled'
import Lit from '../assets/litLogo.png'
import TextField from '../components/TextField'

// Navigate
import { json, Navigate, useNavigate } from 'react-router-dom';

// Back4App
import Parse from 'parse/dist/parse.min.js';

// Notifications
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [conta, setConta] = useState();
  const [message, setMessage] = useState(null)
  const [condition, setCondition] = useState("hidden")
  const [key, setKey] = useState("")
  const navigate = useNavigate();

  function timeout(delay) {
    return new Promise( res => setTimeout(res, delay) );
}

  async function addPerson() {
    try {
      // create a new Parse Object instance
      const Person = new Parse.Object('Person');
      // define the attributes you want for your Object
      Person.set('name', name);
      Person.set('email', email);
      Person.set('password', password)
      // save it on Back4App Data Store
      await Person.save();
      console.log("deu bom")
      toast.success("Registrado com sucesso")
      timeout(3000)
      
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
    setConta(Person);
  }

  const checkEmailValidation = () => {
    const rgExp = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,6}$/
    if (rgExp.test(email)) {
      setCondition('hidden')
      passwordValidator()
      // addPerson()
    } else if (email === "") {
      setMessage("Por favor, ensira um insira um e-mail.")
      console.log("Por favor, ensira um insira um e-mail.")
      setCondition("visible")
      
    } else if (!rgExp.test(email)) {
      setMessage("Insira um e-mail válido!")
      setCondition("visible")
      
    }
  }

  const passwordValidator = () => {
    if (password === confirmPassword) {
      console.log("password ok")
      keyValidator()
    } else if (password === "") {
      setMessage("Preencha a senha")
      setCondition('visible')
    }else if (password !== confirmPassword) {
      setMessage("As senhas não combinam!")
      setCondition('visible')
    }
  }

  const keyValidator = async () =>  {
    try {
      // create your Parse Query using the Person Class you've created
      const query = new Parse.Query('Keys');
      // use the equalTo filter to look for user which the name is John. this filter can be used in any data type
      query.equalTo('chaves', key);
      // run the query
      const Keys = await query.first();
      // access the Parse Object attributes
      console.log(`Query: ${JSON.parse(JSON.stringify(Keys)).objectId}`);
      if(Keys.get('Usadas') === "false"){

        const Person = new Parse.Object('Keys');
          // Para setar como true, dou set no id da ROW que quero mudar com o proprio id dessa ROW, e dps mudo oq eu quero na linha seguinte.
          Person.set('objectId', JSON.parse(JSON.stringify(Keys)).objectId);
          Person.set('Usadas', "true");

        try {
          console.log("deu bom")
          // save it on Back4App Data Store
          await Person.save();
          setMessage("LOGADO")
          setCondition("visible")
          addPerson()
          navigate('/ ')
        } catch (error) {
          console.log('Error saving new person: ', error);
        }

        
      }else {
        setMessage("Key já está em uso")
        setCondition("visible")
      }
      
    } catch (error) {
      setMessage("CHAVE INVÁLIDA")
      setCondition("visible")
    }
  }
  

  return (
    <div>
      <Header>
        <img src={Lit} alt="" />
      </Header>

      <Registro>
        <InputsText condition={condition}>
          {condition === "hidden" ? <p>oi</p> : <p>{message}</p>}
        </InputsText>
        
        <Input onChange={(e) => {
          setEmail(e.target.value)
          console.log(e.target.value)
        }} padding={20} fontsize={18} type="email" placeholder="E-mail"></Input>



        <TextField variavel={setName} padding={20} fontsize={18} type="text" placeholder="Nome" ></TextField>

        <TextField variavel={setKey} padding={20} fontsize={18} type="text" placeholder="SUA KEY"  ></TextField>

        <TextField variavel={setPassword} padding={20} fontsize={18} type="password" placeholder="Senha" ></TextField>

        <TextField variavel={setConfirmPassword} padding={20} fontsize={18} type="password" placeholder="Confirmar senha" ></TextField>

        <Input onClick={checkEmailValidation} type="button" value="Registrar" backgroundColor="#51D65E" fontsize={25}></Input>
      </Registro>
      <ToastContainer />
    </div>
  )
}

export default Register