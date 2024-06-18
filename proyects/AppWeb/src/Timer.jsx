import { useState, useEffect} from 'react'

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
    
}, [isActive, TimeInit])

const handleStart = () => setIsActive(true)
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
        
        <input value={TimeInit} onChange={timeHandler}></input>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleClear}>Clear</button>
        <p>Contador: {TimeInit}s</p>

        
        
        
        
        
        
        </>

    )
}
export default Timer