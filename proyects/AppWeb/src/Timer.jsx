import { useState, useEffect} from 'react'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';




const Timer = () => {
    const [TimeReset, setTimeReset] = useState()
    const [TimeInit, setTimeInit] = useState()
    const [isActive, setIsActive] = useState(false)


    const timeHandler = (e) => {
        setTimeInit(e.target.value)
        setTimeReset(e.target.value)
    }
    
  
    useEffect(() => {
        if (isActive && TimeInit!= 0){
        const intervalId = setInterval(() => {
            setTimeInit((prevSeconds) => prevSeconds - 1)
   
        }, 1000)
        return () => clearInterval(intervalId)
        
        }
        if (TimeInit === 0){
            toast.info("Tiempor finalizado")
        }
    
}, [isActive, TimeInit], )

const handleStart = () => {
    toast.info("Temporizador iniciado")
    setIsActive(true)
    
}
const handleStop = () => setIsActive(false)
const handleReset = () => {
    setTimeInit(TimeReset)
    setIsActive(false)
}
const handleClear = () => {
    setTimeInit()
    setIsActive(false)}

    return (
        <>
        <h2>Temporizador</h2>
        <input value={TimeInit} onChange={timeHandler}></input>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleClear}>Clear</button>
        <p>Contador: {TimeInit}s</p>
        <ToastContainer ></ToastContainer>

        
        

        </>

    )
}
export default Timer