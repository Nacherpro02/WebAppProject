import { useState } from "react"

const Count = () => {
    const [count, setCount] = useState(0)

    const countHandler = () => {
        setCount(count + 1)
    }

    const countReset = () => {
        setCount(0)
    }

    return (    
        <>
            <button onClick={countHandler}>Contador: {count}</button>
            <button onClick={countReset}>Reset</button>
        </>
    )
}
export default Count