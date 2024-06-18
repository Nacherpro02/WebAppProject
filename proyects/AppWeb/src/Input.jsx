import { useState } from 'react'

const InputComponent = () => {

const [input, setInput] = useState('')
const [inputSent, setInputSent] = useState('')

  const inputHandler = (e) => 
    {
    setInput(e.target.value)
  }

  const inputSentHandler = () => {
    setInputSent(input)
  }

  return (
    <>
    <p>Escribe texto</p>
    <input type="text" value={input} onChange={inputHandler} placeholder='Escriba...'></input>
    <button onClick={inputSentHandler}>Send</button>
    <p>
        {inputSent}
    </p>
    
    
    </>



  )
}
export default InputComponent