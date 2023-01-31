import React, { useState } from 'react'
import { Header, Input, Registro, StyledLink } from '../styled'
import Lit from '../assets/litLogo.png'
import Register from './Register'

// Notifications reactjs
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Navigate
import { useNavigate } from 'react-router-dom';

// Back4App
import Parse from 'parse/dist/parse.min.js';

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    async function fetchPerson() {
        console.log("oi")
        try {
            // create your Parse Query using the Person Class you've created
            const query = new Parse.Query('Person');
            // use the equalTo filter to look for user which the name is John. this filter can be used in any data type
            query.equalTo('email', email);
            // run the query
            const Person = await query.first();
            // access the Parse Object attributes
            if(Person.get('email') === email && Person.get('password') === password){
                console.log("boa tarde")
                toast.success("Logado com sucesso")
                
                setTimeout(delay, 4000)
            }
            console.log('person email: ', Person.get('email'));
            console.log('person password: ', Person.get('password'));
            console.log('person id: ', Person.id);
        } catch (error) {
            console.log("um erro aconteceu: " + error)
            toast.warn("ERRO GERAL")
            setTimeout(delay, 4000)
             
        }
    }

    const delay = (texto, tipo) => {
        navigate('/')
    }

    return (
        <div>
            <Header><img src={Lit} alt="" /></Header>
            <Registro>
                <p>{process.env.PARSE_APPLICATION_ID}</p>
                <Input onChange={(e) => {setEmail(e.target.value)}} type='email' placeholder='Email' padding={20} fontsize={18} ></Input>

                <Input onChange={(e) => {setPassword(e.target.value)}} type="password" placeholder='Senha' padding={20} fontsize={18} ></Input>

                <Input onClick={fetchPerson} type="button" value="Login" fontsize={25} backgroundColor="#51D65E"></Input>
                <p><StyledLink to="/registro" >Crie uma conta!</StyledLink></p>
                <ToastContainer />
            </Registro>
            
        </div>
    )
}

export default Login