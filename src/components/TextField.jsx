import React from 'react'
import { Input, InputsText } from '../styled'

const TextField = (props) => { // top

    return (
        <div>
                <Input onChange={(e) => {
                    props.variavel(e.target.value)
                    console.log(e.target.value)
                }} placeholder={props.placeholder} type={props.type} value={props.value} 
                backgroundColor={props.backgroundColor} fontsize={props.fontsize} padding={props.padding}></Input>
                <p>{props.mensagem}</p>
        </div>
    )
}

export default TextField